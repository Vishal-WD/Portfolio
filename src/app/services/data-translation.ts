import { Injectable } from '@angular/core';
import { ResumeData } from '../models/resume.model';

@Injectable({
  providedIn: 'root',
})
export class DataTranslationService {

  formatDateRange(start: string, end?: string): string {
    return end ? `${start} - ${end}` : `${start} - Present`;
  }

  // Example translation: transform simplified skills list to tagged view models if needed
  // For now, just a pass-through helper
  translateResumeData(data: ResumeData): ResumeData {
    // Logic to modify data if needed for specific UI requirements
    return data;
  }
}
