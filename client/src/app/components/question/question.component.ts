import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.sass'],
})
export class QuestionComponent implements OnInit {
  currentQuestion: string;
  responses: string[] = [];

  constructor(private _appService: AppService) {
    this.currentQuestion = 'Question';
    this.responses.push('Réponse1');
    this.responses.push('Réponse2');
  }

  ngOnInit(): void {}

  onClick() {
    console.log(this.currentQuestion);
    console.log(this.responses);
  }
}
