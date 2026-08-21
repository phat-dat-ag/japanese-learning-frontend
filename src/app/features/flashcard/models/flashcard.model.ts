export interface Flashcard {
    id: string;
    lessonId: string;

    word: string;
    reading: string;
    meaning: string;

    exampleSentence?: string;
    exampleTranslation?: string;
    audioUrl?: string;
}