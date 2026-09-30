import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationSchema, ProjectData } from '../../i18n';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.html',
  styleUrl: './modal.css'
})
export class ModalComponent {
  project = input<ProjectData | null>(null);
  t = input.required<TranslationSchema>();

  closeModal = output<void>();

  onClose() {
    this.closeModal.emit();
  }
}
