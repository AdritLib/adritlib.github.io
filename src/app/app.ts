import { Component, ElementRef, OnInit, signal, ViewChild  } from '@angular/core';
import { IconElementDirective } from './directives/IconElementDirective';

@Component({
  selector: 'app-root',
  imports: [IconElementDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('portafolio_adrian');
  @ViewChild('puntoLimite', { static: true }) puntoLimite!: ElementRef;

  botonVisible = signal(true);
  ngOnInit(){
    this.crearObservador()
  }

  crearObservador() {
    const opciones = {
      root: null,
      threshold: 0
    };

    const observador = new IntersectionObserver(([entrada]) => {
      this.botonVisible.set(!entrada.isIntersecting);
    }, opciones);

    observador.observe(this.puntoLimite.nativeElement);
  }
}
