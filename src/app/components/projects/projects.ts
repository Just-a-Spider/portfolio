import { Component, input, output, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationSchema, ProjectData } from '../../i18n';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent {
  t = input.required<TranslationSchema>();
  projects = input.required<ProjectData[]>();
  selectedCategory = input<string>('all');

  categoryChanged = output<string>();
  openModal = output<ProjectData>();

  readonly featuredProjects = computed(() => this.projects().filter(p => p.featured));
  
  readonly regularProjects = computed(() => {
    const cat = this.selectedCategory();
    const list = this.projects().filter(p => !p.featured);
    if (cat === 'all') return list;
    return list.filter(p => p.category === cat);
  });

  setCategory(cat: string) {
    this.categoryChanged.emit(cat);
  }

  viewDetails(project: ProjectData) {
    this.openModal.emit(project);
  }
}
