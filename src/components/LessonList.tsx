import React, { useState } from 'react';
import { EnglishLesson } from '../types';
import { Sparkles, GraduationCap, Search, Trash2, ArrowRight, Wand2, Star, BookOpen } from 'lucide-react';

interface LessonListProps {
  lessons: EnglishLesson[];
  onSelectLesson: (lesson: EnglishLesson, defaultView: 'interactive' | 'worksheet') => void;
  onOpenGenerator: () => void;
  onDeleteCustomLesson?: (id: string) => void;
}

export default function LessonList({ lessons, onSelectLesson, onOpenGenerator, onDeleteCustomLesson }: LessonListProps) {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'curated' | 'custom'>('all');

  // Filter lessons according to state variables
  const filteredLessons = lessons.filter((lesson) => {
    const matchesSearch =
      lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.story.title.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      activeFilter === 'all' ||
      (activeFilter === 'curated' && !lesson.isCustom) ||
      (activeFilter === 'custom' && lesson.isCustom);

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-8 select-text">
      
      {/* Playful Hero banner calling for action */}
      <div className="bg-gradient-to-br from-sky-400 via-sky-500 to-indigo-600/90 text-white rounded-[32px] p-6 md:p-8 shadow-lg relative overflow-hidden border border-white/30">
        {/* Soft childish background bubble decor */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 pointer-events-none"></div>
        <div className="absolute bottom-0 left-12 w-48 h-48 bg-emerald-400/10 rounded-full -ml-16 -mb-16 pointer-events-none"></div>

        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-400 text-amber-950 text-[11px] font-bold rounded-full uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-amber-950" /> 8-11 Yoshli Bolalar Uchun Maxsus
          </div>
          <h1 className="text-2xl md:text-3xl font-black tracking-tight leading-tight">
            Ingliz Tili "Round-Up" Reading <br />&amp; A4 Ish Varaqlari Tizimi 
          </h1>
          <p className="text-sky-50 text-xs md:text-sm font-reading leading-relaxed max-w-xl">
            Sariq rangli interaktiv so'zlar ustiga bosib uning talaffuzini, o'zbekcha tarjimasini ko'ring, jozibador lug'at o'yinini o'ynang yoki darslarni darhol A4 formatda chop eting!
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-2">
            <button
              id="hero-ai-trigger-btn"
              onClick={onOpenGenerator}
              className="flex items-center gap-1.5 px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-amber-950 font-bold text-xs rounded-xl shadow-xs transition transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Wand2 className="w-4 h-4" />
              Yangi AI dars yaratish
            </button>
            <p className="text-[10px] text-sky-100 font-sans">Dinozavrlar, Minecraft, Feya peri va boshqa qiziqarli mavzularda!</p>
          </div>
        </div>
      </div>

      {/* Filter and search controllers */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between p-4 bg-white/40 backdrop-blur-md rounded-2xl border border-white/80 shadow-xs">
        {/* Course Filters */}
        <div className="flex gap-1.5 bg-white/30 p-1 rounded-xl w-full sm:w-auto border border-white/40">
          <button
            onClick={() => setActiveFilter('all')}
            className={`flex-1 sm:flex-initial px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-sky-500 text-white shadow-xs'
                : 'text-slate-600 hover:bg-white/50'
            }`}
          >
            Barchasi ({lessons.length})
          </button>
          <button
            onClick={() => setActiveFilter('curated')}
            className={`flex-1 sm:flex-initial px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              activeFilter === 'curated'
                ? 'bg-sky-500 text-white shadow-xs'
                : 'text-slate-600 hover:bg-white/50'
            }`}
          >
            Darslik darslari ({lessons.filter(l => !l.isCustom).length})
          </button>
          <button
            onClick={() => setActiveFilter('custom')}
            className={`flex-1 sm:flex-initial px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              activeFilter === 'custom'
                ? 'bg-sky-500 text-white shadow-xs'
                : 'text-slate-600 hover:bg-white/50'
            }`}
          >
            AI Custom Ish Varaqlari ({lessons.filter(l => l.isCustom).length})
          </button>
        </div>

        {/* Search Input field */}
        <div className="relative w-full sm:w-72">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-4 w-4 text-sky-500" />
          </span>
          <input
            id="lesson-search-input"
            type="text"
            placeholder="Dars yoki qoidani qidirish..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs bg-white/80 border border-white/90 rounded-xl focus:outline-hidden focus:bg-white focus:border-sky-400 text-slate-800 placeholder:text-slate-400 font-reading font-medium"
          />
        </div>
      </div>

      {/* Grid listing of found lessons */}
      {filteredLessons.length === 0 ? (
        <div className="text-center py-12 p-8 bg-white/40 backdrop-blur-md rounded-3xl border border-white">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="font-bold text-slate-700">Hech qanday dars topilmadi!</h3>
          <p className="text-xs text-slate-500 mt-1">Siz yozgan qidiruv kaliti bo'yicha hech narsa chiqmadi. Boshqa so'z bilan urinib ko'ring.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLessons.map((lesson) => {
            const hasCustomBadge = lesson.isCustom;
            return (
              <div
                key={lesson.id}
                className="rounded-2xl p-5 shadow-xs kid-card flex flex-col justify-between relative overflow-hidden"
              >
                {/* Visual marker decoration top band */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${
                  hasCustomBadge ? 'bg-gradient-to-r from-amber-400 to-orange-400' : 'bg-gradient-to-r from-sky-400 to-sky-500'
                }`}></div>

                <div>
                  <div className="flex items-center justify-between mb-3 pt-1">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wide flex items-center gap-1 ${
                      hasCustomBadge ? 'bg-amber-100/80 text-amber-850' : 'bg-sky-50/80 text-sky-850'
                    }`}>
                      {hasCustomBadge ? (
                        <>
                          <Sparkles className="w-3 h-3 text-amber-500" />
                          AI customized
                        </>
                      ) : (
                        <>
                          <GraduationCap className="w-3 h-3 text-sky-500" />
                          Unit Lesson
                        </>
                      )}
                    </span>
                    <span className="text-[10px] text-slate-400 font-bold">Age: 8-11</span>
                  </div>

                  <h3 className="font-bold text-slate-800 text-sm leading-snug tracking-tight hover:text-sky-600 transition">
                    {lesson.title}
                  </h3>
                  
                  <div className="mt-2 text-[10.5px] bg-white/40 text-slate-600 p-2 rounded-lg font-reading border border-white/50 leading-normal">
                    <strong className="text-slate-850 block text-[9.5px] uppercase font-bold tracking-wider mb-0.5">Grammatika Fokus:</strong>
                    {lesson.topic}
                  </div>

                  <p className="text-[11px] text-slate-500 font-reading mt-3 line-clamp-2 leading-relaxed">
                    "{lesson.story.content}"
                  </p>
                </div>

                {/* Card controllers / buttons footer */}
                <div className="mt-5 pt-3 border-t border-white/40 flex items-center justify-between gap-2">
                  
                  {/* Delete button for generated custom list items only */}
                  {hasCustomBadge && onDeleteCustomLesson ? (
                    <button
                      title="Custom darslikni o'chirish"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (confirm("Bu AI darslikni o'chirishni xohlaysizmi?")) {
                          onDeleteCustomLesson(lesson.id);
                        }
                      }}
                      className="p-2 text-rose-500 hover:bg-rose-50 hover:text-rose-600 rounded-xl transition shrink-0 cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  ) : <div className="w-1"></div>}

                  <div className="flex gap-1.5 ml-auto">
                    <button
                      onClick={() => onSelectLesson(lesson, 'interactive')}
                      className="px-3 py-1.5 bg-white/50 hover:bg-white text-slate-700 font-bold text-[11px] rounded-lg transition shrink-0 cursor-pointer border border-white/40"
                    >
                      O'qish & O'yin
                    </button>
                    <button
                      onClick={() => onSelectLesson(lesson, 'worksheet')}
                      className="px-3 py-1.5 bg-sky-500 hover:bg-sky-400 text-white font-bold text-[11px] rounded-lg transition-all shrink-0 flex items-center gap-1 cursor-pointer"
                    >
                      A4 / Print
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Yakuniy xulosa: Children reward banner */}
      <div className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 text-white rounded-[32px] p-6 md:p-8 shadow-xl relative overflow-hidden border border-white/20 mt-12">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
        
        <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
          <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl shrink-0 flex items-center justify-center animate-bounce">
            <span className="text-4xl">🏆</span>
          </div>
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-wide">Yakuniy Xulosa ✨</h2>
            <p className="text-xs md:text-sm text-amber-50 font-reading leading-relaxed">
              Ura! Siz barcha hikoyalarni o\'qib chiqdingiz va ingliz tili sirlarini o\'rganib chiqdingiz. Endi siz "Round-Up Starter" qahramonlari bilan bemalol do\'stlashishingiz mumkin. Bilim olishdan hech qachon to\'xtamang, chunki har bir yangi so\'z — bu yangi dunyo demakdir. Balli, bolajonlar! Omad doimo sizga yor bo\'lsin!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
