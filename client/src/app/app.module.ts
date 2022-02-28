import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { QuestionComponent } from './components/question/question.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AppService } from './services/app.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    QuestionComponent,
    AccueilComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
