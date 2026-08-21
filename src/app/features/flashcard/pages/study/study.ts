import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { Flashcard } from '../../components/flashcard/flashcard';
import { FlashcardService } from '../../services/flashcard.service';

@Component({
  selector: 'app-study',
  imports: [Flashcard, RouterLink],
  templateUrl: './study.html'
})
export class Study {
  private readonly route = inject(ActivatedRoute);
  private readonly flashcardService = inject(FlashcardService);

  readonly levelId =
    this.route.snapshot.paramMap.get('level') ?? '';

  readonly lessonId =
    this.route.snapshot.paramMap.get('lessonId') ?? '';

  readonly level =
    this.flashcardService.getLevelById(this.levelId);

  readonly lesson =
    this.flashcardService.getLessonById(this.lessonId);

  readonly cards =
    this.flashcardService.getFlashcardsByLesson(this.lessonId);

  readonly currentIndex = signal(0);

  readonly currentCard = computed(() =>
    this.cards[this.currentIndex()]
  );

  readonly progress = computed(() => {
    if (this.cards.length === 0) {
      return 0;
    }

    return ((this.currentIndex() + 1) / this.cards.length) * 100;
  });

  nextCard(): void {
    if (this.currentIndex() < this.cards.length - 1) {
      this.currentIndex.update(index => index + 1);
    }
  }
}