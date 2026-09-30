import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationSchema } from '../../i18n';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class ExperienceComponent {
  t = input.required<TranslationSchema>();
  experiences = input.required<any[]>();
  recognitions = input.required<any[]>();
}
