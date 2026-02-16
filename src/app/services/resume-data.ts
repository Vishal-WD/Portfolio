import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ResumeData } from '../models/resume.model';
import { RESUME_DATA } from '../data/resume-data';

@Injectable({
  providedIn: 'root',
})
export class ResumeDataService {
  getResumeData(): Observable<ResumeData> {
    return of(RESUME_DATA);
  }
}
