import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeDataService } from '../../services/resume-data';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-publications',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './publications.html',
    styleUrl: './publications.css',
})
export class Publications {
    private resumeService = inject(ResumeDataService);
    resumeData = toSignal(this.resumeService.getResumeData());
}
