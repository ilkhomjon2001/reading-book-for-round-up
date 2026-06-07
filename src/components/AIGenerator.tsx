import React, { useState } from 'react';
import { EnglishLesson } from '../types';
import { Sparkles, Wand2, Compass, Loader2, RefreshCw, AlertCircle, BookOpen } from 'lucide-react';

interface AIGeneratorProps {
  onLessonGenerated: (lesson: EnglishLesson) => void;
  onCancel: () => void;
}

const GRAMMAR_TOPICS = [
  'Singular & Plural Nouns / Articles (a/an/the)',
  'Personal Pronouns & Verb "To Be" (am/is/are)',
  'Demonstratives (This/That/These/Those) & "Have/Has Got"',
  'Present Continuous (Am/Is/Are + Verb-ing)',
  'Present Simple vs. Present Continuous',
  'Prepositions of Place (In, On, Under, Behind, Next to)',
  'Modal Verb "Can / Can’t" & Adjectives/Adverbs'
];

const SUGGESTED_INTERESTS = [
  { label: '🎮 Minecraft & Games', value: 'Minecraft adventure' },
  { label: '🦖 Dinosaurs', value: 'friendly dinosaurs in Jurassic park' },
  { label: '🧙‍♂️ Harry Potter / Magic', value: 'wizards and magical spells' },
  { label: '🚀 Space Travel', value: 'rocket starship adventure' },
  { label: '🐱 Cute Kittens / Pets', value: 'cute fluffy kittens and puppies' },
  { label: '🏎️ Fast Racing Cars', value: 'supersonic toys racing grand prix' },
  { label: '🧜‍♀️ Mermaids & Ocean', value: 'ocean coral reef mermaids' },
  { label: '⚽ Soccer / Football', value: 'championship football match' }
];

export default function AIGenerator({ onLessonGenerated, onCancel }: AIGeneratorProps) {
  const [interest, setInterest] = useState<string>('');
  const [selectedTopic, setSelectedTopic] = useState<string>(GRAMMAR_TOPICS[0]);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [loadingStep, setLoadingStep] = useState<number>(0);

  // Interval-driven progress steps during AI generation to keep things engaging
  const loadingSteps = [
    "Sehrli kitob ochilmoqda...",
    "Bolajon uchun eng qiziqarli g'oyani topmoqdamiz...",
    "Tanlangan grammatik qoidani hikoyaga moslashtirmoqdamiz...",
    "Yangi tarjimali lug'at sahifasini tuzmoqdamiz...",
    "A4 formatidagi topshiriq va mashqlarni tayyorlamoqdamiz...",
    "Barcha satrlarni chiroyli qilib tartibga keltirmoqdamiz..."
  ];

  const handleSuggestClick = (val: string) => {
    setInterest(val);
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!interest.trim()) {
      setErrorMsg("Iltimos, bolaning qiziqishlarini yozing yoki pastdagilardan birini tanlang!");
      return;
    }

    setIsGenerating(true);
    setErrorMsg('');
    setLoadingStep(0);

    // Increment loading message indicator index every few seconds
    const interval = setInterval(() => {
      setLoadingStep((prev) => (prev < loadingSteps.length - 1 ? prev + 1 : prev));
    }, 2800);

    try {
      const response = await fetch('/api/generate-lesson', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          grammarTopic: selectedTopic,
          interest: interest.trim()
        }),
      });

      if (!response.ok) {
        throw new Error("Darslik generatoridan javob olishda xatolik yuz berdi. Iltimos keyinroq qayta urining.");
      }

      const lesson: EnglishLesson = await response.json();
      
      // Inject local details
      lesson.id = 'custom_' + Date.now();
      lesson.isCustom = true;
      lesson.interest = interest;

      clearInterval(interval);
      onLessonGenerated(lesson);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || "Tizim ulanishida kutilmagan xatolik yuz berdi.");
    } finally {
      clearInterval(interval);
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white/50 backdrop-blur-md rounded-3xl border border-white shadow-xl overflow-hidden">
      {/* Step Header info */}
      <div className="p-6 bg-gradient-to-r from-sky-400 via-sky-500 to-indigo-600 text-white relative">
        <div className="absolute top-4 right-4 bg-white/15 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 backdrop-blur-xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          AI Powered
        </div>
        <h2 className="text-2xl font-bold tracking-tight">Sehrli AI Ish Varaqlari Generatori</h2>
        <p className="text-sky-50 text-xs mt-1 font-reading">
          O'quvchining sevimli qahramonlari yoki qiziqishiga moslab reading hikoyasi va mashqlarini soniyalar ichida yarating!
        </p>
      </div>

      {isGenerating ? (
        /* Loader block with playful kid animations */
        <div id="ai-generator-loading-screen" className="p-12 flex flex-col items-center justify-center text-center space-y-6 min-h-[400px]">
          <div className="relative flex items-center justify-center">
            {/* Spinning space background rings */}
            <div className="absolute w-24 h-24 rounded-full border-4 border-slate-100 border-t-sky-500 animate-spin"></div>
            <div className="absolute w-16 h-16 rounded-full border-4 border-amber-100 border-b-amber-500 animate-spin" style={{ animationDirection: 'reverse' }}></div>
            <Wand2 className="w-8 h-8 text-sky-500 relative z-10 animate-bounce" />
          </div>

          <div className="space-y-2 max-w-md">
            <h3 className="text-lg font-bold text-slate-800 animate-pulse">Biz sehrli darslik kodi yozmoqdamiz...</h3>
            <p className="text-xs text-slate-500 min-h-[3rem] px-4 font-reading italic">
              « {loadingSteps[loadingStep]} »
            </p>
          </div>

          {/* Tips box to keep parents entertained */}
          <div className="p-4 bg-sky-50/50 border border-sky-100 rounded-2xl max-w-sm text-[11px] text-sky-700 font-reading leading-normal">
            <strong>Kid Fun Fact:</strong> Bolalar o'zlarining sevimli qiziqishlari (masalan, sevimli o'yinlari) tilga olingan matnlarni 3 barobar tezroq va ishtiyoq bilan o'qiydilar!
          </div>
        </div>
      ) : (
        /* Main Interactive Form Builder */
        <form onSubmit={handleGenerate} className="p-8 space-y-6">
          {errorMsg && (
            <div className="p-4 bg-rose-50 border-l-4 border-rose-500 rounded-xl text-xs text-rose-700 flex items-start gap-2.5">
              <AlertCircle className="w-5 h-5 text-rose-500 shrink-0" />
              <div>
                <strong className="block font-bold">Xatolik:</strong>
                <span>{errorMsg}</span>
              </div>
            </div>
          )}

          {/* Form Step 1: Grammar choice */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-sky-500" />
              1. Round-Up Grammatika Mavzusi (Grammar Topic)
            </label>
            <p className="text-xs text-slate-500 mt-0.5">Bolaning dars jadvaliga mos grammatik qoidani tanlang:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
              {GRAMMAR_TOPICS.map((topicOption) => {
                const isSelected = selectedTopic === topicOption;
                return (
                  <button
                    type="button"
                    key={topicOption}
                    onClick={() => setSelectedTopic(topicOption)}
                    className={`p-3 text-left text-xs rounded-xl border font-medium transition-all flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'border-sky-500 bg-sky-50/50 text-sky-950 font-semibold shadow-xs'
                        : 'border-slate-100 hover:border-slate-200 text-slate-700 bg-slate-50/20'
                    }`}
                  >
                    <span>{topicOption}</span>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-2 ${
                      isSelected ? 'border-sky-500 bg-sky-500 text-white' : 'border-slate-300 bg-white'
                    }`}>
                      {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Form Step 2: Children Target Interest custom input */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-emerald-500" />
              2. Kichkintoyning Qiziqishlari (Interests)
            </label>
            <p className="text-xs text-slate-500">Hikoya nima haqida bo'lsin? Bolaning sevimli qahramoni, o'yini yoki hayvonini yozing:</p>
            
            <input
              id="ai-generator-interest-input"
              type="text"
              required
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              placeholder="Masalan: Lego shahridagi qutqaruvchilar, Dinozavrlar saltanati, sehrli mushuklar..."
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-hidden focus:border-sky-500 text-sm placeholder:text-slate-400 text-slate-800"
            />

            {/* Quick suggested chips */}
            <div className="pt-2">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Tayyor g'oyalardan namuna:</span>
              <div className="flex flex-wrap gap-2 mt-1.5">
                {SUGGESTED_INTERESTS.map((chip, idx) => (
                  <button
                    type="button"
                    key={idx}
                    onClick={() => handleSuggestClick(chip.value)}
                    className="px-3 py-1.5 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full cursor-pointer transition"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Form Bottom submission actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={onCancel}
              className="px-5 py-2.5 text-xs text-slate-600 hover:text-slate-800 font-medium cursor-pointer"
            >
              Bekor qilish
            </button>

            <button
              id="submit-ai-generator-btn"
              type="submit"
              className="px-6 py-2.5 bg-sky-500 hover:bg-sky-400 border border-sky-600 text-white rounded-xl text-xs font-semibold flex items-center gap-2 shadow-xs transition cursor-pointer"
            >
              <Wand2 className="w-4 h-4" />
              Sehrli Readingni Yaratish 🪄
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
