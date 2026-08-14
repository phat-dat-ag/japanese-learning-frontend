import { Component, input, output, signal } from '@angular/core';

import { Flashcard as FlashcardModel } from '../../models/flashcard.model';

@Component({
  selector: 'app-flashcard',
  imports: [],
  templateUrl: './flashcard.html'
})
export class Flashcard {
  card = input.required<FlashcardModel>();

  revealed = signal(false);

  revealedChange = output<boolean>();

  reveal(): void {
    this.revealed.set(true);
    this.revealedChange.emit(true);
  }
}