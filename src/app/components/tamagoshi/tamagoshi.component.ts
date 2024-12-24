import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tamagoshi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tamagoshi.component.html',
  styleUrl: './tamagoshi.component.css'
})
export class TamagoshiComponent {
  namea: string = "Tchoupi";
  images: Array<string> = ['🎃', '🦁', '🐯', '🐱', '🐵', '🦧', '🐼', '🐨', '🐻'];
  currentImage: string = this.images[Math.floor(Math.random() * this.images.length)];
  etatFaim: number = 100;
  etatBonheur: number = 100;
  etatEnergie: number = 100;
  message: string = '';

  changeImage() {
    this.currentImage = this.images[Math.floor(Math.random() * this.images.length)];
  }

  addToEtat(type: string) {
    if (type === 'faim' && this.etatFaim < 100) {
      this.etatFaim += 10;
      this.showMessage("Miam miam... Je suis rassasié !");
    } else if (type === 'bonheur' && this.etatBonheur < 100) {
      this.etatBonheur += 10;
      this.showMessage("Youpi... Je suis heureux !");
    } else if (type === 'energie' && this.etatEnergie < 100) {
      this.etatEnergie += 10;
      this.showMessage("Zzz... Je me sens reposé.");
    }
  }

  showMessage(message: string) {
    this.message = message;
  }
}
