import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './components/question/question.component';
import { AccueilComponent } from './components/accueil/accueil.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'questions', component: QuestionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
