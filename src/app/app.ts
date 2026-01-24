import { Component, signal  } from '@angular/core';
import { IconElementDirective } from './components/icon-element/IconElementDirective';

@Component({
  selector: 'app-root',
  imports: [IconElementDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portafolio_adrian');
}
