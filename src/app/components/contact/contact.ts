import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule for simple form handling
import { ResumeDataService } from '../../services/resume-data';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private resumeService = inject(ResumeDataService);
  resumeData = toSignal(this.resumeService.getResumeData());

  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    // Demo functionality
    alert(`Thank you ${this.formData.name}! Your message has been sent (simulated).`);
    this.formData = { name: '', email: '', message: '' };
  }
}
