import { Component } from '@angular/core';

@Component({
  selector: 'app-meteo',
  standalone: true,
  imports: [],
  templateUrl: './meteo.component.html',
  styleUrl: './meteo.component.css'
})
export class MeteoComponent {

  currentYear: number = new Date().getFullYear();
  currentMonth: any = new Date().getMonth();
  currentDate: number = new Date().getDate();
  currentDay: any = new Date().getDay();

  constructor() {
    if (this.currentMonth == 0){
      this.currentMonth = "Janvier";
        } else if (this.currentMonth == 1) {
      this.currentMonth = "Février";
        } else if (this.currentMonth == 2) {
      this.currentMonth = "Mars";
        } else if (this.currentMonth == 3) {
      this.currentMonth = "Avril";
        } else if (this.currentMonth == 4) {
      this.currentMonth = "Mai";
        } else if (this.currentMonth == 5) {
      this.currentMonth = "Juin";
        } else if (this.currentMonth == 6) {
      this.currentMonth = "Juillet";
        } else if (this.currentMonth == 7) {
      this.currentMonth = "Août";
        } else if (this.currentMonth == 8) {
      this.currentMonth = "Septembre";
        } else if (this.currentMonth == 9) {
      this.currentMonth = "Octobre";
        } else if (this.currentMonth == 10) {
      this.currentMonth = "Novembre";
        } else if (this.currentMonth == 11) {
      this.currentMonth = "Décembre";
        }

    if (this.currentDay == 0){
      this.currentDay = "Dimanche";
        } else if (this.currentDay == 1) {
      this.currentDay = "Lundi";
        } else if (this.currentDay == 2) {
      this.currentDay = "Mardi";
        } else if (this.currentDay == 3) {
      this.currentDay = "Mercredi";
        } else if (this.currentDay == 4) {
      this.currentDay = "Jeudi";
        } else if (this.currentDay == 5) {
      this.currentDay = "Vendredi";
        } else if (this.currentDay == 6) {
      this.currentDay = "Samedi";
        }
    }

}
