import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';

import { Certifications } from './components/certifications/certifications';
import { Publications } from './components/publications/publications';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Footer,
    Hero,
    About,
    Skills,
    Projects,
    Publications,
    Certifications,
    Contact
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('vishal-portfolio');
}
