import { AfterViewInit, Component } from '@angular/core';
import { items } from './nav-items/items';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent implements AfterViewInit {
  public currentLang: 'ar' | 'en';
  public navItems = items;

  public constructor() {
    this.currentLang = (localStorage.getItem('lang') as any) || 'ar';
  }

  public ngAfterViewInit(): void {
    import('./js/app-menu.min');
    import('./js/app.min');
  }

  public changeLanguage(lang: 'ar' | 'en'): void {
    localStorage.setItem('lang', lang);
    location.reload();
  }
}
