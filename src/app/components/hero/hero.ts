import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeDataService } from '../../services/resume-data';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  private resumeService = inject(ResumeDataService);
  resumeData = toSignal(this.resumeService.getResumeData());
}
