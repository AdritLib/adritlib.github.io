import { Directive, ElementRef, Input, OnInit, Renderer2  } from '@angular/core';

@Directive({
  selector: '[icon]',
  standalone: true
})
export class IconElementDirective implements OnInit{
  private readonly iconRoot = (icon: string) => {
    return `<img src="./../../../assets/icons/${icon}.svg"/>`
  }
  private readonly icons = new Map<string, string>([
    ["Java", this.iconRoot('java')],
    ["Spring", this.iconRoot('spring')],
    ["JavaScript", this.iconRoot('javascript')],
    ["React", this.iconRoot('react')],
    ["Linkedin", this.iconRoot('linkedin')],
    ["Github", this.iconRoot('github')],
    ["CSharp", this.iconRoot('csharp')],
    ["PHP", this.iconRoot('php')],
    ["Mysql", this.iconRoot('mysql')],
    ["SQLServer", this.iconRoot('sqlserver')],
    ["VisualStudio", this.iconRoot('visualstudio')],
    ["VisualStudioCode", this.iconRoot('visualstudiocode')],
    ["Trello", this.iconRoot('trello')],
    ["Angular", this.iconRoot('angular')],
    ["AndroidStudio", this.iconRoot('androidstudio')]
  ]);

  @Input('icon') iconKey!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const iconSvg = this.icons.get(this.iconKey);

    if (iconSvg) {
      const span = this.renderer.createElement('span');
      this.renderer.addClass(span, 'icon__stored');
      this.renderer.addClass(span, 'bg-not');
      this.renderer.addClass(span, 'vertical-flex');
      
      if (!this.el.nativeElement.getAttribute('title')) {
        this.renderer.setAttribute(span, 'data-tooltip', this.iconKey);
        this.renderer.addClass(span, 'tooltip');
      }
      
      span.innerHTML = iconSvg;
      this.renderer.insertBefore(this.el.nativeElement, span, this.el.nativeElement.firstChild);
      
    }
  }
}
