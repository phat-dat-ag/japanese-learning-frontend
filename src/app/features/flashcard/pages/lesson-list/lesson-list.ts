import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { FlashcardService } from '../../services/flashcard.service';
import { LessonCard } from '../../components/lesson-card/lesson-card';

@Component({
  selector: 'app-lesson-list',
  imports: [LessonCard, RouterLink],
  templateUrl: './lesson-list.html'
})
export class LessonList {
  private readonly route = inject(ActivatedRoute);
  private readonly flashcardService = inject(FlashcardService);

  readonly levelId =
    this.route.snapshot.paramMap.get('level') ?? '';

  readonly level =
    this.flashcardService.getLevelById(this.levelId);

  readonly lessons =
    this.flashcardService.getLessonsByLevel(this.levelId);
}