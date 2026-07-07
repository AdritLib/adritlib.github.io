import { Directive, ElementRef, Input, OnInit, Renderer2  } from '@angular/core';

@Directive({
  selector: '[icon]',
  standalone: true
})
export class IconElementDirective implements OnInit{
  private readonly iconRoot = (icon: string, size: string) => {
    return `<img src="./../../../assets/icons/${icon}.svg" class="icon-size ${size}"/>`
  }
  private readonly icons = new Map<string, string>([
    ["Java", 'java'],
    ["Spring", 'spring'],
    ["JavaScript", 'javascript'],
    ["React", 'react'],
    ["Linkedin", 'linkedin'],
    ["Github", 'github'],
    ["CSharp", 'csharp'],
    ["PHP", 'php'],
    ["Mysql", 'mysql'],
    ["SQLServer", 'sqlserver'],
    ["VisualStudio", 'visualstudio'],
    ["VisualStudioCode", 'visualstudiocode'],
    ["Trello", 'trello'],
    ["Angular", 'angular'],
    ["AndroidStudio", 'androidstudio'],
    ["sobremi", "sobremi"]
  ]);

  @Input('icon') iconKey!: string;
  @Input('text') iconText!: string;
  @Input('tooltip') iconTooltip!: string;
  @Input('iconSize') iconSize: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const iconSvg = this.icons.get(this.iconKey);
    
    if (!iconSvg) return;
    const img = this.renderer.createElement('img');
    this.renderer.addClass(img, 'icon-size');
    this.renderer.setAttribute(img, 'src', `./../../../assets/icons/${iconSvg}.svg`);

    const span = this.el.nativeElement;
    this.renderer.addClass(span, 'icon__stored');
    this.renderer.addClass(span, 'bg-not');
    this.renderer.addClass(span, 'vertical-flex');

    if(this.iconTooltip){
      this.renderer.setAttribute(span, 'data-tooltip', this.iconTooltip ? this.iconTooltip : this.iconKey );
      this.renderer.addClass(span, 'tooltip');
    }
    
    span.innerHTML = this.iconText ? 
    this.iconRoot(iconSvg, this.iconSize) + `<p class="icon-text">${this.iconText}</p>` :
    this.iconRoot(iconSvg, this.iconSize);
      //this.renderer.insertBefore(this.el.nativeElement, span, this.el.nativeElement.firstChild);
  }
}
