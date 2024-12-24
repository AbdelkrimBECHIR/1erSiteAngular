import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tamagoshi',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tamagoshi.component.html',
  styleUrl: './tamagoshi.component.css'
})
export class TamagoshiComponent {
  name: string = '';
  isNameSet: boolean = false;
  images: Array<string> = ['🎃', '🦁', '🐯', '🐱', '🐵', '🦧', '🐼', '🐨', '🐻'];
  currentImage: string = this.images[Math.floor(Math.random() * this.images.length)];
  etatFaim: number = 100;
  etatBonheur: number = 100;
  etatEnergie: number = 100;
  message: string = '';
  private interval: number | null = null;

  startGame() {
    if (this.name.trim()) {
      this.isNameSet = true;
      this.interval = window.setInterval(() => {
        this.etatFaim = Math.max(0, this.etatFaim - 1);
        this.etatBonheur = Math.max(0, this.etatBonheur - 1);
        this.etatEnergie = Math.max(0, this.etatEnergie - 1);
      }, 10000);
    }
  }

  changeImage(): void {
    const currentIndex = this.images.indexOf(this.currentImage);
    let newIndex = Math.floor(Math.random() * this.images.length);
    while (newIndex === currentIndex) {
      newIndex = Math.floor(Math.random() * this.images.length);
    }
    this.currentImage = this.images[newIndex];
  }


  addToEtat(type: string): void {
    switch (type) {
      case 'faim':
        if (this.etatFaim < 100) {
          this.etatFaim = Math.min(100, this.etatFaim + 25);
          this.showMessage("Miam miam... Je suis rassasié !");
          this.speakMessage("Miam miam... Je suis rassasié !");
        }
        break;
      case 'bonheur':
        if (this.etatBonheur < 100) {
          this.etatBonheur = Math.min(100, this.etatBonheur + 20);
          this.showMessage("Youpi... Je suis heureux !");
          this.speakMessage("Youpi... Je suis heureux !");
        }
        break;
      case 'energie':
        if (this.etatEnergie < 100) {
          this.etatEnergie = Math.min(100, this.etatEnergie + 15);
          this.showMessage("Zzz... Je me sens reposé.");
          this.speakMessage("Zzz... Je me sens reposé.");
        }
        break;
    }
  }

  private showMessage(message: string): void {
    this.message = message;
    setTimeout(() => {
      this.message = '';
    }, 3000);
  }

  private speakMessage(message: string): void {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(message);
      utterance.lang = 'fr-FR';
      utterance.rate = 0.8;
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    }
  }
}
