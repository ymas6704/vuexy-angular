import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LayoutService } from './services';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  public constructor(
    layoutService: LayoutService,
    translateService: TranslateService
  ) {
    const currentLang = localStorage.getItem('lang') || 'ar';
    layoutService.changeLayout(currentLang === 'ar' ? 'rtl' : 'ltr');
    translateService.use(currentLang);
  }
}
