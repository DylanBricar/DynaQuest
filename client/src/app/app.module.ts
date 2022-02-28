import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { QuestionComponent } from './components/question/question.component';
import { AccueilComponent } from './components/accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    QuestionComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
