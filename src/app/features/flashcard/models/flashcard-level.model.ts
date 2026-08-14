export type FlashcardLevelCode = 'N1' | 'N2' | 'N3' | 'N4' | 'N5';

export interface FlashcardLevel {
    id: string;
    code: FlashcardLevelCode;
    name: string;
    description: string;
    lessonCount: number;
}