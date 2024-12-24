import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-jeux',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './jeux.component.html',
  styleUrl: './jeux.component.css'
})
export class JeuxComponent {
}
