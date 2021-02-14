import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LayoutService {
  private renderer: Renderer2;
  private theLayout$ = new BehaviorSubject<'ltr' | 'rtl'>('ltr');

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  public changeLayout(layout: 'ltr' | 'rtl') {
    // default
    this.renderer.setAttribute(document.documentElement, 'dir', layout);
    this.renderer.setAttribute(
      document.documentElement,
      'data-textdirection',
      layout
    );
    this.theLayout$.next(layout);
  }

  public get layout$(): Observable<'ltr' | 'rtl'> {
    return this.theLayout$.asObservable();
  }
}
