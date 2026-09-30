import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationSchema } from '../../i18n';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class SkillsComponent {
  t = input.required<TranslationSchema>();
  skillCategories = input.required<any[]>();
}
