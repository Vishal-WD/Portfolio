import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeDataService } from '../../services/resume-data';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-certifications',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './certifications.html',
    styleUrl: './certifications.css',
})
export class Certifications {
    private resumeService = inject(ResumeDataService);
    resumeData = toSignal(this.resumeService.getResumeData());
}
