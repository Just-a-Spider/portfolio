import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationSchema } from '../../i18n';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  t = input.required<TranslationSchema>();
  profile = input.required<any>();

  emailCopied = output<void>();

  onCopyEmail() {
    this.emailCopied.emit();
  }
}
