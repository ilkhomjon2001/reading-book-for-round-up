import React, { useState, useEffect } from 'react';
import { EnglishLesson } from './types';
import { curatedLessons } from './data/curatedLessons';
import LessonList from './components/LessonList';
import LessonPractice from './components/LessonPractice';
import A4Worksheet from './components/A4Worksheet';
import AIGenerator from './components/AIGenerator';
import { BookOpen, Sparkles, GraduationCap, Github } from 'lucide-react';

export default function App() {
  const [lessons, setLessons] = useState<EnglishLesson[]>(curatedLessons);
  const [selectedLesson, setSelectedLesson] = useState<EnglishLesson | null>(null);
  const [currentView, setCurrentView] = useState<'list' | 'interactive' | 'worksheet' | 'generator'>('list');

  // Load custom lessons from localStorage on startup
  useEffect(() => {
    try {
      const stored = localStorage.getItem('roundup_custom_lessons');
      if (stored) {
        const parsed: EnglishLesson[] = JSON.parse(stored);
        if (parsed && Array.isArray(parsed)) {
          // Combine standard curated lessons with retrieved custom ones
          setLessons([...curatedLessons, ...parsed]);
        }
      }
    } catch (e) {
      console.error("Local storage initialization failed safety check:", e);
    }
  }, []);

  // Handler to add custom generated lesson
  const handleAddNewLesson = (newLesson: EnglishLesson) => {
    // Save to local list state
    const updatedList = [...lessons, newLesson];
    setLessons(updatedList);

    // Persist custom ones only in localStorage
    const customOnly = updatedList.filter(l => l.isCustom);
    localStorage.setItem('roundup_custom_lessons', JSON.stringify(customOnly));

    // Select and open the new lesson immediately in interactive mode!
    setSelectedLesson(newLesson);
    setCurrentView('interactive');
  };

  // Handler to delete custom lesson
  const handleDeleteCustomLesson = (id: string) => {
    const updatedList = lessons.filter(l => l.id !== id);
    setLessons(updatedList);

    const customOnly = updatedList.filter(l => l.isCustom);
    localStorage.setItem('roundup_custom_lessons', JSON.stringify(customOnly));
    
    if (selectedLesson?.id === id) {
      setSelectedLesson(null);
      setCurrentView('list');
    }
  };

  const handleSelectLesson = (lesson: EnglishLesson, defaultView: 'interactive' | 'worksheet') => {
    setSelectedLesson(lesson);
    setCurrentView(defaultView);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between relative overflow-x-hidden p-3 sm:p-6 bg-[#fdfcf0]">
      {/* Absolute background blur shapes */}
      <div className="absolute top-[-100px] right-[-100px] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-sky-200 rounded-full blur-[100px] opacity-40 pointer-events-none no-print"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-yellow-250 rounded-full blur-[100px] opacity-40 pointer-events-none no-print"></div>

      {/* Main glass frame wrapper */}
      <div className="flex-1 w-full max-w-7xl mx-auto bg-white/60 backdrop-blur-xl rounded-[32px] sm:rounded-[40px] border border-white shadow-2xl flex flex-col lg:flex-row overflow-hidden relative z-10">
        
        {/* Left vertical gradient accent sidebar from Design */}
        <div className="hidden lg:flex w-16 bg-gradient-to-b from-sky-400 via-sky-300 to-sky-400 flex-col items-center justify-between py-10 text-white shrink-0 no-print select-none border-r border-white/20">
          <div className="text-white font-bold text-xs -rotate-90 whitespace-nowrap tracking-widest mt-16 uppercase opacity-80 font-sans">
            ROUND UP FOR KIDS
          </div>
          <div className="bg-white/30 p-2 text-[10px] uppercase font-black tracking-wider rounded-xl border border-white/20">
            A1+
          </div>
        </div>

        {/* Outer content holder */}
        <div className="flex-1 flex flex-col justify-between min-w-0">
          
          {/* Header styled as Glass-morphic Bar */}
          <header className="bg-white/40 border-b border-white/80 py-4 px-6 md:px-8 no-print backdrop-blur-md">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Logo brand */}
              <div 
                onClick={() => { setSelectedLesson(null); setCurrentView('list'); }}
                className="flex items-center gap-2.5 cursor-pointer select-none group"
              >
                <div className="w-9 h-9 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-black hover:rotate-6 transition duration-300 shadow-md">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <span className="flex items-center gap-1 text-[9px] uppercase font-extrabold text-sky-600 tracking-wider">
                    Round-Up Kids Space
                    <Sparkles className="w-3 h-3 text-amber-500 fill-amber-400 animate-pulse" />
                  </span>
                  <h1 className="text-sm md:text-base font-extrabold text-slate-800 tracking-tight leading-none mt-0.5 group-hover:text-indigo-600 transition">
                    Reading &amp; Vocabulary
                  </h1>
                </div>
              </div>

              {/* Quick Stats list */}
              <nav className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <button
                  onClick={() => { setSelectedLesson(null); setCurrentView('list'); }}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    currentView === 'list' 
                      ? 'bg-sky-500 text-white font-bold shadow-xs' 
                      : 'hover:bg-white/60 text-slate-700'
                  } cursor-pointer`}
                >
                  Darslar Ro'yxati
                </button>
                <button 
                  id="header-ai-create-btn"
                  onClick={() => setCurrentView('generator')}
                  className={`px-3 py-1.5 rounded-lg border transition-all ${
                    currentView === 'generator' 
                      ? 'bg-amber-400 hover:bg-amber-350 border-amber-500 text-amber-250 font-bold' 
                      : 'hover:bg-white/60 border-white/80 text-slate-700'
                  } cursor-pointer`}
                >
                  Sehrli AI Generator 🪄
                </button>
              </nav>
            </div>
          </header>

          {/* Primary content area container */}
          <main className="flex-1 py-6 px-4 md:px-8 max-w-7xl w-full mx-auto">
            {currentView === 'list' && (
              <LessonList
                lessons={lessons}
                onSelectLesson={handleSelectLesson}
                onOpenGenerator={() => setCurrentView('generator')}
                onDeleteCustomLesson={handleDeleteCustomLesson}
              />
            )}

            {currentView === 'generator' && (
              <AIGenerator
                onLessonGenerated={handleAddNewLesson}
                onCancel={() => { setCurrentView('list'); }}
              />
            )}

            {currentView === 'interactive' && selectedLesson && (
              <LessonPractice
                lesson={selectedLesson}
                onBack={() => { setSelectedLesson(null); setCurrentView('list'); }}
                onViewWorksheet={() => setCurrentView('worksheet')}
              />
            )}

            {currentView === 'worksheet' && selectedLesson && (
              <A4Worksheet
                lesson={selectedLesson}
                onBack={() => setCurrentView('interactive')}
              />
            )}
          </main>

          {/* Footer element matching glass look */}
          <footer className="bg-white/30 border-t border-white/60 py-5 px-6 md:px-8 text-center text-[11px] text-slate-400 no-print backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-left font-reading">
                <p className="font-semibold text-slate-600 text-[11px]">
                  © {new Date().getFullYear()} Round-Up Kiddie English Builder. Bolajonlar uchun oddiy va qiziqarli darslar platformasi.
                </p>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  "Round Up for kids" o'quv dasturi asosidagi interaktiv matnlar, lug'at o'yinlari va chop etiluvchi A4 ish varaqalari.
                </p>
              </div>
              <div className="text-[10px] text-slate-400 shrink-0 font-medium">
                Style: <span className="text-sky-600 font-bold">Frosted Glass Theme</span>
              </div>
            </div>
          </footer>
        </div>

      </div>
    </div>
  );
}
