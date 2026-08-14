import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FlashcardLesson } from '../../models/flashcard-lesson.model';

@Component({
  selector: 'app-lesson-card',
  imports: [RouterLink],
  templateUrl: './lesson-card.html'
})
export class LessonCard {
  lesson = input.required<FlashcardLesson>();
  levelId = input.required<string>();
}