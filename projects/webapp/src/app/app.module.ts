import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { HomeComponent } from './home/home.component';
import { LayoutService, TranslationLoaderService } from './services';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [AppComponent, DefaultLayoutComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
  ],
  providers: [LayoutService, TranslationLoaderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
