import React, { useState, useEffect } from 'react';
import { EnglishLesson, VocabularyItem } from '../types';
import { BookOpen, Star, HelpCircle, Lightbulb, Award, RotateCcw, Volume2, Sparkles, CheckCircle, ArrowRight, Eye } from 'lucide-react';

interface LessonPracticeProps {
  lesson: EnglishLesson;
  onBack: () => void;
  onViewWorksheet: () => void;
}

export default function LessonPractice({ lesson, onBack, onViewWorksheet }: LessonPracticeProps) {
  const [activeTab, setActiveTab] = useState<'story' | 'vocab' | 'comprehension' | 'grammar'>('story');
  
  // Vocabulary popup tooltip state
  const [selectedWord, setSelectedWord] = useState<VocabularyItem | null>(null);

  // Match Vocabulary Game State
  const [shuffleWords, setShuffleWords] = useState<{ id: string; text: string; type: 'en' | 'uz'; masterWord: string }[]>([]);
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
  const [matchedWords, setMatchedWords] = useState<string[]>([]); // holds masterWords that are matched
  const [matchAttempts, setMatchAttempts] = useState<number>(0);
  const [gameWon, setGameWon] = useState<boolean>(false);

  // Comprehension responses tracking
  const [comprehensionAnswers, setComprehensionAnswers] = useState<{ [qId: number]: string }>({});
  const [checkedComprehension, setCheckedComprehension] = useState<{ [qId: number]: boolean }>({});

  // Grammar responses tracking
  const [grammarAnswers, setGrammarAnswers] = useState<{ [gId: number]: string }>({});
  const [checkedGrammar, setCheckedGrammar] = useState<{ [gId: number]: boolean }>({});

  // Synthesis Audio chime effects
  const playSoundEffect = (type: 'success' | 'failure' | 'complete') => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      if (type === 'success') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.08); // E5
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
        osc.start();
        osc.stop(ctx.currentTime + 0.25);
      } else if (type === 'failure') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, ctx.currentTime); // A3
        osc.frequency.setValueAtTime(180, ctx.currentTime + 0.08); // F3
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
      } else if (type === 'complete') {
        osc.type = 'sine';
        const now = ctx.currentTime;
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.1);
        osc.frequency.setValueAtTime(783.99, now + 0.2);
        osc.frequency.setValueAtTime(1046.5, now + 0.3);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
        osc.start();
        osc.stop(now + 0.6);
      }
    } catch (e) {
      console.log("Audio feedback error omitted safety check:", e);
    }
  };

  // Setup/Reset Vocabulary matching game
  const initVocabGame = () => {
    const list: { id: string; text: string; type: 'en' | 'uz'; masterWord: string }[] = [];
    
    lesson.vocabulary.forEach((item, idx) => {
      // English card
      list.push({
        id: `en_${idx}`,
        text: item.word,
        type: 'en',
        masterWord: item.word
      });
      // Uzbek translation card
      list.push({
        id: `uz_${idx}`,
        text: item.translation,
        type: 'uz',
        masterWord: item.word
      });
    });

    // Shuffle the list
    const shuffled = [...list].sort(() => Math.random() - 0.5);
    setShuffleWords(shuffled);
    setSelectedCardId(null);
    setMatchedWords([]);
    setMatchAttempts(0);
    setGameWon(false);
  };

  // Trigger game setting once lesson changes or tab matches vocab
  useEffect(() => {
    if (activeTab === 'vocab') {
      initVocabGame();
    }
  }, [activeTab, lesson]);

  // Handle vocab card selection click
  const handleCardClick = (card: { id: string; text: string; type: 'en' | 'uz'; masterWord: string }) => {
    // If card is already matched, ignore
    if (matchedWords.includes(card.masterWord)) return;

    if (!selectedCardId) {
      // First selection of pair
      setSelectedCardId(card.id);
    } else {
      // Third-party redundant click same card
      if (selectedCardId === card.id) {
        setSelectedCardId(null);
        return;
      }

      // Check matched details
      const previousCard = shuffleWords.find(c => c.id === selectedCardId);
      if (!previousCard) return;

      setMatchAttempts(prev => prev + 1);

      if (previousCard.type !== card.type && previousCard.masterWord === card.masterWord) {
        // MATCH SUCCESS!
        const updatedMatches = [...matchedWords, card.masterWord];
        setMatchedWords(updatedMatches);
        setSelectedCardId(null);
        playSoundEffect('success');

        if (updatedMatches.length === lesson.vocabulary.length) {
          setGameWon(true);
          playSoundEffect('complete');
        }
      } else {
        // MATCH FAILS
        playSoundEffect('failure');
        // Flash selecting card as invalid then reset selection
        setSelectedCardId(card.id);
        setTimeout(() => {
          setSelectedCardId(null);
        }, 600);
      }
    }
  };

  // Custom text splitting to inject span buttons for vocabulary tooltips
  const renderInteractiveStory = (text: string) => {
    // Find all vocabulary words from the lesson
    const vocabList = lesson.vocabulary.map((v) => v.word.toLowerCase());
    
    // Simple word splitting of paragraph strings
    const paragraphs = text.split('\n\n');
    return paragraphs.map((paragraph, pIdx) => {
      // Splitting string using boundaries to preserve punctuation
      const words = paragraph.split(/(\s+)/);
      return (
        <p key={pIdx} className="text-slate-800 font-reading text-base leading-relaxed mb-4 leading-7">
          {words.map((chunk, cIdx) => {
            // Clean up chunk to match dictionary key (retaining commas/full stops visually)
            const cleanWord = chunk.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()"?]/g, "").trim().toLowerCase();
            const isMatch = vocabList.includes(cleanWord);
            
            if (isMatch) {
              const matchedVocab = lesson.vocabulary.find((v) => v.word.toLowerCase() === cleanWord)!;
              return (
                <span
                  key={cIdx}
                  onClick={() => setSelectedWord(matchedVocab)}
                  className="px-1 bg-amber-100 hover:bg-amber-200 border-b-2 border-dashed border-amber-500 font-bold text-amber-950 rounded-sm cursor-pointer transition-all inline-block hover:-translate-y-0.5"
                  title="Lug'atni ko'rish"
                >
                  {chunk}
                </span>
              );
            }
            return <span key={cIdx}>{chunk}</span>;
          })}
        </p>
      );
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Lesson Navigation Header Panel */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-xs">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="px-4 py-2 text-xs bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium rounded-xl border border-slate-200 transition cursor-pointer"
          >
            ← Barcha darslar
          </button>
          <div>
            <span className="text-[10px] font-bold text-amber-600 tracking-wider block uppercase">ACTIVE STUDY</span>
            <h2 className="text-lg font-bold text-slate-800 leading-tight">{lesson.title}</h2>
          </div>
        </div>

        {/* Floating actions */}
        <div className="flex items-center gap-2">
          <button
            id="view-worksheet-upper-btn"
            onClick={onViewWorksheet}
            className="flex items-center gap-1.5 px-4 py-2 bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 font-medium text-xs rounded-xl shadow-xs transition cursor-pointer"
          >
            <Eye className="w-4 h-4" />
            Varaqani Ko'rish (A4 / Print)
          </button>
        </div>
      </div>

      {/* Grammar Overview Flash Info Card */}
      <div className="bg-gradient-to-r from-teal-500/10 to-indigo-500/10 rounded-2xl border border-indigo-100/50 p-5 flex flex-col md:flex-row gap-4 items-start">
        <div className="p-3 bg-indigo-600 text-white rounded-xl">
          <Lightbulb className="w-6 h-6 animate-pulse" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-indigo-950 uppercase tracking-wider">Bugungi dars grammatikasi: {lesson.topic}</h3>
          <p className="text-xs text-slate-700 font-reading mt-1 leading-relaxed">
            {lesson.grammarOverview}
          </p>
        </div>
      </div>

      {/* Interactive Tabs Menu for kids */}
      <div className="flex flex-col sm:flex-row justify-between border-b border-white/40 gap-1 overflow-x-auto no-scrollbar bg-white/30 p-1.5 rounded-2xl backdrop-blur-md border border-white/50">
        <button
          onClick={() => setActiveTab('story')}
          className={`flex-1 py-3 px-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'story'
              ? 'bg-sky-500 text-white shadow-xs border border-white/20'
              : 'text-slate-600 hover:bg-white/50'
          }`}
        >
          <BookOpen className={`w-4 h-4 shrink-0 ${activeTab === 'story' ? 'text-white' : 'text-slate-500'}`} />
          <span>Hikoyani o'qish (Reading)</span>
        </button>

        <button
          onClick={() => setActiveTab('vocab')}
          className={`flex-1 py-3 px-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'vocab'
              ? 'bg-sky-500 text-white shadow-xs border border-white/20'
              : 'text-slate-600 hover:bg-white/50'
          }`}
        >
          <Star className={`w-4 h-4 shrink-0 ${activeTab === 'vocab' ? 'text-white' : 'text-amber-500'}`} />
          <span>Lug'at o'yini (Words Match)</span>
        </button>

        <button
          onClick={() => setActiveTab('comprehension')}
          className={`flex-1 py-3 px-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'comprehension'
              ? 'bg-sky-500 text-white shadow-xs border border-white/20'
              : 'text-slate-600 hover:bg-white/50'
          }`}
        >
          <HelpCircle className={`w-4 h-4 shrink-0 ${activeTab === 'comprehension' ? 'text-white' : 'text-sky-500'}`} />
          <span>Tushunish testi (Quiz)</span>
        </button>

        <button
          onClick={() => setActiveTab('grammar')}
          className={`flex-1 py-3 px-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'grammar'
              ? 'bg-sky-500 text-white shadow-xs border border-white/20'
              : 'text-slate-600 hover:bg-white/50'
          }`}
        >
          <Award className={`w-4 h-4 shrink-0 ${activeTab === 'grammar' ? 'text-white' : 'text-violet-500'}`} />
          <span>Grammatika mashqi</span>
        </button>
      </div>

      {/* TAB ACTIVE PANEL VIEWPORT */}
      <div className="bg-white/50 backdrop-blur-md rounded-3xl border border-white/80 shadow-md p-6 md:p-8 min-h-[350px]">
        
        {/* TAB 1: STORY READER VIEW */}
        {activeTab === 'story' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="text-[11px] font-bold text-amber-600 tracking-wider uppercase flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Sariq rangli so'zlar ustiga bosib tarjimasini ko'ring!
              </span>
              <span className="text-xs text-slate-400 font-reading">Reading Passage</span>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl relative">
              <h2 className="text-xl font-black text-slate-800 tracking-tight mb-4 font-reading border-b pb-2 border-slate-200">
                {lesson.story.title}
              </h2>
              <div className="prose max-w-none text-slate-700 font-reading">
                {renderInteractiveStory(lesson.story.content)}
              </div>
            </div>

            {/* Quick Vocabulary helper table */}
            <div className="pt-4">
              <h4 className="text-xs font-extrabold text-slate-500 tracking-wider uppercase mb-3">Today's Key Words (Yangi so'zlar)</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
                {lesson.vocabulary.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedWord(item)}
                    className="p-3 bg-white border border-slate-200/60 rounded-xl hover:border-amber-400 cursor-pointer transition-all hover:-translate-y-1 text-center"
                  >
                    <span className="font-extrabold text-slate-800 text-sm block tracking-wide">{item.word}</span>
                    <span className="text-[10px] text-slate-400 block italic leading-tight mt-0.5">{item.partOfSpeech}</span>
                    <hr className="my-1.5 border-slate-100" />
                    <span className="text-xs text-indigo-700 font-medium block truncate">{item.translation}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Active vocab details popup / slider panel */}
            {selectedWord && (
              <div className="p-4 bg-amber-50/50 border border-amber-200/80 rounded-2xl flex flex-col md:flex-row gap-4 justify-between items-start md:items-center transition-all animate-fade-in relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-200/20 rounded-full blur-xl"></div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-black text-amber-950 font-reading">{selectedWord.word}</span>
                    <span className="text-[10px] uppercase font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">{selectedWord.partOfSpeech}</span>
                  </div>
                  <p className="text-xs font-semibold text-indigo-900">Uzbekcha tarjimasi: {selectedWord.translation}</p>
                  <p className="text-xs text-slate-600 font-reading"><strong className="text-slate-800">English:</strong> {selectedWord.definition}</p>
                  <p className="text-xs italic text-slate-500 font-reading">Usage: "{selectedWord.example}"</p>
                </div>
                <button
                  onClick={() => setSelectedWord(null)}
                  className="px-3 py-1 bg-amber-200/70 hover:bg-amber-200 text-amber-900 text-xs font-bold rounded-lg transition shrink-0 cursor-pointer"
                >
                  Yopish
                </button>
              </div>
            )}

            {/* Prompt navigation bottom button */}
            <div className="flex justify-end pt-4">
              <button
                onClick={() => setActiveTab('vocab')}
                className="flex items-center gap-1.5 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl shadow-xs transition"
              >
                Mavzu lug'at o'yinini boshlash
                <ArrowRight className="w-4 h-4 animate-bounce" />
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: MATCHING VOCAB GAME VIEW */}
        {activeTab === 'vocab' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-bold text-indigo-600 tracking-wider block uppercase">Mind Match Arena</span>
                <h3 className="text-base font-extrabold text-slate-800 tracking-tight">So'zlarni Bir-biriga Qo'shing</h3>
              </div>
              <div className="text-xs text-slate-500 font-reading">
                Urinishlar soni: <span className="font-bold text-slate-800">{matchAttempts}</span> | To'g'ri topildi: <span className="font-bold text-emerald-600">{matchedWords.length} / {lesson.vocabulary.length}</span>
              </div>
            </div>

            {gameWon ? (
              /* Success Congratulations Splash card */
              <div className="p-8 bg-emerald-50 border border-emerald-100 rounded-3xl text-center space-y-4 max-w-md mx-auto">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm animate-bounce">
                  <Award className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-emerald-950">Ajoyib natija! 🎉</h3>
                  <p className="text-xs text-emerald-700 font-reading leading-relaxed">
                    Siz barcha {lesson.vocabulary.length} ta dars bo'yicha yangi inglizcha so'zlarni ularning o'zbekcha ma'nosi bilan xatosiz topdingiz!
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2 pt-2">
                  <button
                    onClick={initVocabGame}
                    className="flex items-center gap-1 px-4 py-2 text-xs bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-xs transition cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Qaytadan o'ynash
                  </button>
                  <button
                    onClick={() => setActiveTab('comprehension')}
                    className="flex items-center gap-1 px-4 py-2 text-xs bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl shadow-xs transition cursor-pointer"
                  >
                    Tushunish testiga o'tish
                  </button>
                </div>
              </div>
            ) : (
              /* Play cards board list grid */
              <div className="space-y-4">
                <p className="text-xs text-slate-500 leading-normal">
                  Inglizcha so'zni va unga mos keladigan o'zbekcha tarjima kartasini ketma-ket bosing. Juftlik to'g'ri bo'lsa, kartalar yashil rangga kiradi:
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {shuffleWords.map((card) => {
                    const isMatched = matchedWords.includes(card.masterWord);
                    const isSelected = selectedCardId === card.id;
                    
                    return (
                      <button
                        type="button"
                        key={card.id}
                        disabled={isMatched}
                        onClick={() => handleCardClick(card)}
                        className={`p-4 h-24 font-reading rounded-2xl border text-center flex flex-col items-center justify-center transition-all cursor-pointer select-none relative overflow-hidden ${
                          isMatched
                            ? 'bg-emerald-50 border-emerald-200 text-emerald-700 font-bold opacity-60'
                            : isSelected
                            ? 'bg-indigo-500 border-indigo-600 text-white scale-102 hover:bg-indigo-600 font-bold shadow-md shadow-indigo-200'
                            : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800 font-medium'
                        }`}
                      >
                        {/* Status matched checker bubble */}
                        {isMatched && (
                          <div className="absolute top-1 right-1 bg-emerald-500 text-white p-0.5 rounded-full scale-75">
                            <CheckCircle className="w-3.5 h-3.5" />
                          </div>
                        )}
                        <span className="text-xs font-bold leading-normal">{card.text}</span>
                        <span className="text-[8px] uppercase tracking-wider text-slate-400 font-sans mt-1">
                          {isMatched ? 'Matched' : card.type === 'en' ? 'English' : 'O\'zbekcha'}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                  <button
                    onClick={initVocabGame}
                    className="flex items-center gap-1.5 text-xs text-indigo-600 font-bold bg-indigo-50 px-4 py-2 rounded-xl border border-indigo-100 hover:bg-indigo-100/50 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Kartalarni aralashtirish
                  </button>
                  <button
                    onClick={() => setActiveTab('comprehension')}
                    className="flex items-center gap-1 px-4 py-2 text-xs bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl shadow-xs transition cursor-pointer"
                  >
                    Comprehension Quizga o'tish →
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: READING COMPREHENSION QUIZ VIEW */}
        {activeTab === 'comprehension' && (
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <span className="text-[10px] font-bold text-indigo-600 tracking-wider block uppercase">Comprehension Master</span>
              <h3 className="text-base font-extrabold text-slate-800 tracking-tight">Matn bo'yicha savollarga javob bering</h3>
            </div>

            <div className="space-y-6">
              {lesson.readingComprehension.map((q, idx) => {
                const answer = comprehensionAnswers[q.id];
                const isChecked = checkedComprehension[q.id];
                const isSelectedAndCorrect = answer === q.correctAnswer;

                return (
                  <div key={q.id} className="p-5 border border-slate-100 rounded-2xl bg-slate-50/50 space-y-3">
                    <h4 className="text-sm font-bold text-slate-800 flex items-start gap-1.5 font-reading">
                      <span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-md text-[11px] font-bold shrink-0">{idx + 1}</span>
                      <span>{q.question}</span>
                    </h4>

                    {/* Question option bubbles */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-6">
                      {q.options.map((opt, oIdx) => {
                        const isCurrentSelection = answer === opt;
                        
                        let optionStyle = "border-slate-200 bg-white hover:border-slate-300 text-slate-700";
                        if (isCurrentSelection) {
                          if (isChecked) {
                            optionStyle = opt === q.correctAnswer 
                              ? "bg-emerald-500 border-emerald-600 text-white" 
                              : "bg-rose-500 border-rose-600 text-white";
                          } else {
                            optionStyle = "bg-indigo-600 border-indigo-700 text-white";
                          }
                        } else if (isChecked && opt === q.correctAnswer) {
                          optionStyle = "bg-emerald-50 border-emerald-500 text-emerald-800 font-bold";
                        }

                        return (
                          <button
                            type="button"
                            key={oIdx}
                            onClick={() => {
                              if (isChecked) return; // ignore selection change after checking
                              setComprehensionAnswers({ ...comprehensionAnswers, [q.id]: opt });
                            }}
                            className={`p-3 text-left text-xs rounded-xl border font-medium transition cursor-pointer select-none font-reading ${optionStyle}`}
                          >
                            <span>{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Action checks */}
                    <div className="pl-6 flex items-center justify-between gap-4 pt-1">
                      {answer && !isChecked && (
                        <button
                          onClick={() => {
                            setCheckedComprehension({ ...checkedComprehension, [q.id]: true });
                            if (answer === q.correctAnswer) {
                              playSoundEffect('success');
                            } else {
                              playSoundEffect('failure');
                            }
                          }}
                          className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-bold rounded-lg cursor-pointer transition shadow-xs"
                        >
                          Javobni Tekshirish
                        </button>
                      )}

                      {isChecked && (
                        <div className={`p-3 rounded-lg text-xs font-sans italic w-full ${
                          isSelectedAndCorrect ? 'bg-emerald-50 text-emerald-800 border-l-4 border-emerald-500' : 'bg-rose-50 text-rose-800 border-l-4 border-rose-500'
                        }`}>
                          <strong className="block font-sans not-italic text-[11px] font-bold uppercase mb-0.5">
                            {isSelectedAndCorrect ? 'To\'g\'ri javob! 🎉' : 'Xato tanlash! 🧐'}
                          </strong>
                          Javob tahlili: {q.explanation}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-end pt-4 border-t border-slate-100">
              <button
                onClick={() => setActiveTab('grammar')}
                className="flex items-center gap-1.5 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl shadow-xs transition"
              >
                Grammatika mashqiga o'tish
                <ArrowRight className="w-4 h-4 animate-bounce" />
              </button>
            </div>
          </div>
        )}

        {/* TAB 4: INTERACTIVE GRAMMAR PRACTICE */}
        {activeTab === 'grammar' && (
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-indigo-600 tracking-wider block uppercase">Grammar Drill</span>
                <h3 className="text-base font-extrabold text-slate-800 tracking-tight">O'rganilgan grammatikaga bag'ishlangan mashqlar</h3>
              </div>
              <span className="text-xs bg-indigo-100 text-indigo-800 px-2.5 py-0.5 rounded-full font-sans text-[11px] font-semibold">{lesson.topic}</span>
            </div>

            <div className="space-y-6">
              {lesson.grammarExercises.map((ex, idx) => {
                const answer = grammarAnswers[ex.id];
                const isChecked = checkedGrammar[ex.id];
                const isSelectedAndCorrect = answer === ex.correctAnswer;

                return (
                  <div key={ex.id} className="p-5 border border-slate-100 rounded-2xl bg-indigo-50/10 space-y-3">
                    <h4 className="text-sm font-bold text-slate-800 flex items-start gap-1.5 font-reading">
                      <span className="bg-indigo-600 text-white px-2 py-0.5 rounded-md text-[11px] font-bold shrink-0">{idx + 1}</span>
                      <span>{ex.question}</span>
                    </h4>

                    {/* Hint Drawer for kids */}
                    <div className="pl-6 flex items-center gap-1 text-slate-500 text-[11px] font-sans italic bg-slate-50 p-2 rounded-lg border">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>Maslahat: {ex.hint}</span>
                    </div>

                    {/* Exercise Multiple choices if defined */}
                    {ex.options && ex.options.length > 0 && (
                      <div className="grid grid-cols-2 gap-2 pl-6">
                        {ex.options.map((opt, oIdx) => {
                          const isCurrentSelection = answer === opt;

                          let optionStyle = "border-slate-200 bg-white hover:border-slate-300 text-slate-700";
                          if (isCurrentSelection) {
                            if (isChecked) {
                              optionStyle = opt === ex.correctAnswer 
                                ? "bg-emerald-500 border-emerald-600 text-white" 
                                : "bg-rose-500 border-rose-600 text-white";
                            } else {
                              optionStyle = "bg-indigo-600 border-indigo-700 text-white";
                            }
                          } else if (isChecked && opt === ex.correctAnswer) {
                            optionStyle = "bg-emerald-50 border-emerald-500 text-emerald-800 font-bold";
                          }

                          return (
                            <button
                              type="button"
                              key={oIdx}
                              onClick={() => {
                                if (isChecked) return; // lock response
                                setGrammarAnswers({ ...grammarAnswers, [ex.id]: opt });
                              }}
                              className={`p-2.5 text-left text-xs rounded-xl border font-medium font-reading transition cursor-pointer select-none ${optionStyle}`}
                            >
                              <span>{opt}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Answer checks trigger bar */}
                    <div className="pl-6 flex items-center justify-between gap-4 pt-1">
                      {answer && !isChecked && (
                        <button
                          onClick={() => {
                            setCheckedGrammar({ ...checkedGrammar, [ex.id]: true });
                            if (answer === ex.correctAnswer) {
                              playSoundEffect('success');
                            } else {
                              playSoundEffect('failure');
                            }
                          }}
                          className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-bold rounded-lg cursor-pointer transition shadow-xs"
                        >
                          Javobni Tekshirish
                        </button>
                      )}

                      {isChecked && (
                        <div className={`p-3 rounded-lg text-xs font-sans italic w-full ${
                          isSelectedAndCorrect ? 'bg-emerald-50 text-emerald-800 border-l-4 border-emerald-500' : 'bg-rose-50 text-rose-800 border-l-4 border-rose-500'
                        }`}>
                          <strong className="block font-sans not-italic text-[11px] font-bold uppercase mb-0.5">
                            {isSelectedAndCorrect ? 'Excellent! Judayam toʻgʻri soʻz! 🎉' : 'Xato! O\'ylab ko\'ring 🧩'}
                          </strong>
                          To'g'ri javob: <span className="bg-emerald-100 text-emerald-950 font-bold px-1 py-0.5 rounded-sm">{ex.correctAnswer}</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Actions to conclude Practice Session */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-100">
              <button
                onClick={() => {
                  // Reset exercises responses
                  setGrammarAnswers({});
                  setCheckedGrammar({});
                  setComprehensionAnswers({});
                  setCheckedComprehension({});
                  setMatchedWords([]);
                  setGameWon(false);
                  setMatchAttempts(0);
                }}
                className="flex items-center gap-1 px-4 py-2 text-xs text-slate-600 border border-slate-200 hover:bg-slate-50 font-bold rounded-xl transition cursor-pointer"
              >
                <RotateCcw className="w-4 h-4 text-slate-400" />
                Darsni yangilash
              </button>

              <button
                id="view-worksheet-lower-btn"
                onClick={onViewWorksheet}
                className="flex items-center gap-1 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 border border-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition cursor-pointer"
              >
                Chop etish formasiga o'tish (A4 Worksheet)
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
