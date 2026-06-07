import React, { useState } from 'react';
import { EnglishLesson } from '../types';
import { Printer, ArrowLeft, Eye, EyeOff, Layout, Sparkles, BookOpen } from 'lucide-react';

interface A4WorksheetProps {
  lesson: EnglishLesson;
  onBack: () => void;
}

export default function A4Worksheet({ lesson, onBack }: A4WorksheetProps) {
  const [showAnswerKey, setShowAnswerKey] = useState<boolean>(false);
  const [studentName, setStudentName] = useState<string>('');
  const [classValue, setClassValue] = useState<string>('');
  const [dateValue, setDateValue] = useState<string>(new Date().toLocaleDateString('uz-UZ'));

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Top action bar - Hidden during print */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-white/50 backdrop-blur-md rounded-2xl border border-white/80 shadow-xs no-print">
        <div className="flex items-center gap-3">
          <button
            id="back-from-worksheet-btn"
            onClick={onBack}
            className="p-2 bg-white/60 hover:bg-white text-slate-600 rounded-xl transition-all cursor-pointer border border-white/40"
            title="Darsga qaytish"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-slate-800 tracking-tight flex items-center gap-2">
              <Layout className="w-5 h-5 text-sky-500" />
              A4 Format: Chop etish / PDF
            </h1>
            <p className="text-xs text-slate-500">Mavzuni sinfxona yoki uy vazifasi varaqasi sifatida chop etishingiz yoki PDF qilishingiz mumkin.</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Quick inputs for custom worksheet headers */}
          <div className="hidden lg:flex items-center gap-2 mr-4">
            <input
              type="text"
              placeholder="O'quvchi ismi"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="px-3 py-1.5 text-xs bg-white/80 border border-slate-200 rounded-lg focus:outline-hidden focus:border-sky-400 text-slate-850"
            />
            <input
              type="text"
              placeholder="Sinf"
              value={classValue}
              onChange={(e) => setClassValue(e.target.value)}
              className="w-20 px-3 py-1.5 text-xs bg-white/80 border border-slate-200 rounded-lg focus:outline-hidden focus:border-sky-400 text-slate-850"
            />
          </div>

          <button
            id="toggle-answers-btn"
            onClick={() => setShowAnswerKey(!showAnswerKey)}
            className="flex items-center gap-2 px-4 py-2 text-xs border border-white/80 rounded-xl bg-white/60 hover:bg-white text-slate-700 font-medium transition cursor-pointer"
          >
            {showAnswerKey ? (
              <>
                <EyeOff className="w-4 h-4 text-emerald-500" />
                Javoblarni yashirish
              </>
            ) : (
              <>
                <Eye className="w-4 h-4 text-slate-500" />
                Javoblarni ko'rsatish
              </>
            )}
          </button>

          <button
            id="print-trigger-btn"
            onClick={handlePrint}
            className="flex items-center gap-2 px-5 py-2 text-xs bg-sky-500 border border-sky-600 text-white rounded-xl hover:bg-sky-400 font-semibold shadow-xs transition cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            Chop etish (Print)
          </button>
        </div>
      </div>

      {/* Screen mock helper for custom input headers during simple view */}
      <div className="lg:hidden p-4 bg-amber-50 rounded-xl border border-amber-100 text-xs text-amber-800 no-print">
        Tip: O'quvchi ismini kiritish uchun tepadagi darslik varaqasi qismini chop etishdan oldin to'ldirishingiz mumkin.
      </div>

      {/* Printable Area - Rendered nicely styled as an A4 sheet */}
      <div className="overflow-x-auto p-4 flex justify-center bg-slate-100 rounded-2xl no-print">
        {/* Printable representation */}
        <div className="a4-sheet-preview shadow-lg">
          <WorksheetLayout 
            lesson={lesson} 
            showAnswerKey={showAnswerKey} 
            studentName={studentName}
            setStudentName={setStudentName}
            classValue={classValue}
            setClassValue={setClassValue}
            dateValue={dateValue}
            setDateValue={setDateValue}
          />
        </div>
      </div>

      {/* Absolute Printing Target elements - Only visible during print */}
      <div className="hidden print-only">
        <WorksheetLayout 
          lesson={lesson} 
          showAnswerKey={showAnswerKey} 
          studentName={studentName}
          classValue={classValue}
          dateValue={dateValue}
        />
      </div>
    </div>
  );
}

// Sub-component containing A4 dimensions and style boundaries
interface WorksheetLayoutProps {
  lesson: EnglishLesson;
  showAnswerKey: boolean;
  studentName: string;
  setStudentName?: (val: string) => void;
  classValue?: string;
  setClassValue?: (val: string) => void;
  dateValue: string;
  setDateValue?: (val: string) => void;
}

function WorksheetLayout({
  lesson,
  showAnswerKey,
  studentName,
  setStudentName,
  classValue,
  setClassValue,
  dateValue,
  setDateValue
}: WorksheetLayoutProps) {
  return (
    <div className="w-full flex flex-col min-h-full justify-between select-text" style={{ fontFamily: '"Fredoka", "Lexend", sans-serif' }}>
      <div>
        {/* Standard educational school header */}
        <div className="flex justify-between items-start border-b-2 border-slate-800 pb-4 mb-6">
          <div>
            <span className="text-[10px] font-bold text-indigo-600 tracking-widest uppercase flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Round-Up English Activities
            </span>
            <h2 className="text-xl font-extrabold text-slate-800 tracking-tight mt-0.5">{lesson.title}</h2>
            <div className="mt-1 text-xs text-slate-600 font-reading font-medium">
              <span className="bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full font-sans text-[11px] font-semibold">
                Grammar Topic: {lesson.topic}
              </span>
            </div>
          </div>
          <div className="text-right text-[11px] text-slate-500 font-reading">
            <p className="font-bold text-slate-800">Age Class: 8-11 yosh</p>
            <p>Level: Beginner / Elementary</p>
          </div>
        </div>

        {/* Student metadata fields */}
        <div className="grid grid-cols-3 gap-4 border border-slate-300 rounded-lg p-3 bg-slate-50 mb-6 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">Name:</span>
            {setStudentName ? (
              <input
                type="text"
                placeholder="Write your name..."
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="bg-transparent border-b border-dashed border-slate-400 w-full focus:outline-hidden focus:border-indigo-500 px-1"
              />
            ) : (
              <span className="border-b border-slate-400 w-full min-h-[1.5rem] px-1 font-medium text-slate-800">
                {studentName || '_______________________'}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">Class:</span>
            {setClassValue ? (
              <input
                type="text"
                placeholder="Class..."
                value={classValue}
                onChange={(e) => setClassValue(e.target.value)}
                className="bg-transparent border-b border-dashed border-slate-400 w-full focus:outline-hidden focus:border-indigo-500 px-1"
              />
            ) : (
              <span className="border-b border-slate-400 w-full min-h-[1.5rem] px-1 font-medium text-slate-800">
                {classValue || '_______'}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">Date:</span>
            {setDateValue ? (
              <input
                type="text"
                value={dateValue}
                onChange={(e) => setDateValue(e.target.value)}
                className="bg-transparent border-b border-dashed border-slate-400 w-full focus:outline-hidden focus:border-indigo-500 px-1"
              />
            ) : (
              <span className="border-b border-slate-400 w-full min-h-[1.5rem] px-1 font-medium text-slate-800">
                {dateValue || '___________'}
              </span>
            )}
          </div>
        </div>

        {/* Grammar Section */}
        <div className="border border-slate-200 bg-indigo-50/50 rounded-xl p-4 mb-6">
          <h3 className="text-sm font-bold text-indigo-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-indigo-500" />
            Grammatik Qoida (Grammar Check)
          </h3>
          <p className="text-xs text-slate-700 font-reading leading-relaxed leading-5">
            {lesson.grammarOverview}
          </p>
        </div>

        {/* Reading Story Section */}
        <div className="border-2 border-slate-800 rounded-xl p-5 bg-white mb-6">
          <div className="flex items-center justify-between mb-3">
            <h4 id="worksheet-reading-header" className="text-xs font-bold text-amber-600 tracking-wider uppercase">Reading Passage</h4>
            <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded-sm uppercase tracking-wide text-slate-500">Read & Understand</span>
          </div>
          <h3 className="text-base font-extrabold text-slate-900 tracking-tight font-reading mb-2">
            {lesson.story.title}
          </h3>
          <div className="text-[11.5px] text-slate-800 font-reading leading-relaxed whitespace-pre-line leading-5 p-1">
            {lesson.story.content}
          </div>
        </div>

        {/* Vocabulary Section */}
        <div className="mb-6">
          <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">Part 1: Key Vocabulary (Yangi so'zlar)</h3>
          <div className="border border-slate-300 rounded-lg overflow-hidden">
            <table className="w-full text-left text-slate-700 border-collapse">
              <thead>
                <tr className="bg-slate-100 text-[11px] font-bold text-slate-600 border-b border-slate-300">
                  <th className="p-2 border-r border-slate-300 w-1/5">Word & Part</th>
                  <th className="p-2 border-r border-slate-300 w-1/4">Uzbekcha Ma'nosi</th>
                  <th className="p-2 border-r border-slate-300 w-2/5">Definition (English)</th>
                  <th className="p-2">Example Sentence</th>
                </tr>
              </thead>
              <tbody>
                {lesson.vocabulary.map((vocab, index) => (
                  <tr key={index} className="text-[11px] border-b border-slate-200 hover:bg-slate-50 font-reading">
                    <td className="p-2 border-r border-slate-300 font-bold text-slate-900">
                      {vocab.word} <span className="text-[9px] text-slate-500 font-normal">({vocab.partOfSpeech})</span>
                    </td>
                    <td className="p-2 border-r border-slate-300 text-slate-800 font-medium">
                      {vocab.translation}
                    </td>
                    <td className="p-2 border-r border-slate-300 text-slate-600 leading-normal">
                      {vocab.definition}
                    </td>
                    <td className="p-2 text-slate-500 italic leading-normal">
                      "{vocab.example}"
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Reading Comprehension Questions Section */}
        <div className="mb-6">
          <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">Part 2: Reading Comprehension (Tushunish darajasini tekshirish)</h3>
          <div className="space-y-4">
            {lesson.readingComprehension.map((q, idx) => (
              <div key={q.id || idx} className="text-[11.5px] font-reading">
                <p className="font-bold text-slate-800 flex items-start gap-1">
                  <span>{idx + 1}.</span> 
                  <span>{q.question}</span>
                </p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 mt-2 pl-4">
                  {q.options.map((opt, oIdx) => {
                    const alphabet = ['A', 'B', 'C', 'D'][oIdx];
                    const isCorrect = opt === q.correctAnswer;
                    return (
                      <div key={oIdx} className="flex items-center gap-1.5">
                        <div className={`w-4 h-4 rounded-full border border-slate-400 flex items-center justify-center text-[10px] font-bold ${
                          showAnswerKey && isCorrect ? 'bg-emerald-100 border-emerald-600 text-emerald-800' : 'bg-white'
                        }`}>
                          {alphabet}
                        </div>
                        <span className={`${showAnswerKey && isCorrect ? 'text-emerald-700 font-bold' : 'text-slate-700'}`}>
                          {opt}
                        </span>
                      </div>
                    );
                  })}
                </div>
                {showAnswerKey && (
                  <div className="mt-1.5 ml-4 p-1.5 bg-emerald-50 border-l-2 border-emerald-500 text-[10px] text-emerald-800 font-sans italic">
                    Javob tahlili: {q.explanation}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Grammar Exercises Section */}
        <div className="mb-6">
          <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">Part 3: Grammar Practice (O'rganilgan grammatika bo'yicha mashqlar)</h3>
          <div className="space-y-4">
            {lesson.grammarExercises.map((ex, idx) => (
              <div key={ex.id || idx} className="text-[11.5px] font-reading">
                <p className="font-bold text-slate-800 flex items-start gap-1">
                  <span>{idx + 1}.</span>
                  <span>{ex.question}</span>
                </p>
                {ex.options && ex.options.length > 0 ? (
                  <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 mt-2 pl-4">
                    {ex.options.map((opt, oIdx) => {
                      const alphabet = ['a', 'b', 'c', 'd'][oIdx];
                      const isCorrect = opt === ex.correctAnswer;
                      return (
                        <div key={oIdx} className="flex items-center gap-1.5">
                          <div className={`w-3.5 h-3.5 rounded-xs border border-slate-400 flex items-center justify-center text-[9px] font-bold ${
                            showAnswerKey && isCorrect ? 'bg-indigo-100 border-indigo-600 text-indigo-800' : 'bg-white'
                          }`}>
                            {alphabet}
                          </div>
                          <span className={`${showAnswerKey && isCorrect ? 'text-indigo-700 font-bold' : 'text-slate-700'}`}>
                            {opt}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="mt-2 pl-4">
                    <span className="text-slate-400">Answer: _____________________________________________</span>
                  </div>
                )}
                {showAnswerKey ? (
                  <div className="mt-1.5 ml-4 p-1.5 bg-indigo-50 border-l-2 border-indigo-500 text-[10px] text-indigo-800 font-sans italic">
                    Yordam / Izoh: {ex.hint} {ex.options ? '' : `(To'g'ri javob: ${ex.correctAnswer})`}
                  </div>
                ) : (
                  <p className="mt-1 ml-4 text-[9px] text-slate-500 font-sans italic">Clue: {ex.hint}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer credits and score box */}
      <div className="border-t border-slate-300 pt-4 flex justify-between items-center text-[10px] text-slate-500 font-sans mt-auto">
        <div>
          Worksheet generated with Round-Up Kiddie Space builder.
        </div>
        <div className="border border-slate-400 p-2 rounded-lg flex items-center gap-3">
          <div className="text-center px-1">
            <span className="block text-[8px] font-bold text-slate-400 uppercase">Part 1</span>
            <span className="font-bold text-slate-800">/ 5</span>
          </div>
          <div className="h-4 w-[1px] bg-slate-300"></div>
          <div className="text-center px-1">
            <span className="block text-[8px] font-bold text-slate-400 uppercase">Part 2</span>
            <span className="font-bold text-slate-800">/ 3</span>
          </div>
          <div className="h-4 w-[1px] bg-slate-300"></div>
          <div className="text-center px-1">
            <span className="block text-[8px] font-bold text-slate-400 uppercase">Part 3</span>
            <span className="font-bold text-slate-800">/ 3</span>
          </div>
          <div className="h-4 w-[1px] bg-slate-300"></div>
          <div className="text-center px-1">
            <span className="block text-[8px] font-bold text-slate-400 uppercase">Total Score</span>
            <span className="font-extrabold text-slate-900">/ 11</span>
          </div>
        </div>
      </div>
    </div>
  );
}
