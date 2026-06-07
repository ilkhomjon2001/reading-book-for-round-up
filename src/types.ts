export interface VocabularyItem {
  word: string;
  partOfSpeech: string;
  translation: string; // Uzbek translation
  definition: string;  // Simple English definition
  example: string;     // Contextual example sentence
}

export interface ComprehensionQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

export interface GrammarExercise {
  id: number;
  type: 'fill' | 'choice';
  question: string; // For "fill", use "_" for the blank, e.g., "She _ (be) a student."
  options?: string[]; // Optional, for multiple choice type
  correctAnswer: string;
  hint?: string;
}

export interface EnglishLesson {
  id: string;
  title: string;
  topic: string;
  grammarOverview: string; // Explanations in simple Uzbek & English
  story: {
    title: string;
    content: string; // Split in paragraphs or simple markdown
  };
  vocabulary: VocabularyItem[];
  readingComprehension: ComprehensionQuestion[];
  grammarExercises: GrammarExercise[];
  isCustom?: boolean; // Flag if generated via AI
  interest?: string;  // Custom interest, if generated
}
