import { Component, inject } from '@angular/core';

import { FlashcardService } from '../../services/flashcard.service';
import { LevelCard } from '../../components/level-card/level-card';

@Component({
  selector: 'app-level-list',
  imports: [LevelCard],
  templateUrl: './level-list.html'
})
export class LevelList {
  private readonly flashcardService = inject(FlashcardService);

  readonly levels = this.flashcardService.getLevels();
}