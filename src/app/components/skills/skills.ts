import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeDataService } from '../../services/resume-data';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  private resumeService = inject(ResumeDataService);
  resumeData = toSignal(this.resumeService.getResumeData());
}
