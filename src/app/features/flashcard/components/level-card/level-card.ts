import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FlashcardLevel } from '../../models/flashcard-level.model';

@Component({
  selector: 'app-level-card',
  imports: [RouterLink],
  templateUrl: './level-card.html'
})
export class LevelCard {
  level = input.required<FlashcardLevel>();
}