import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  questionUrl = 'http://localhost:4444/question';
  responseUrl = 'http://localhost:4444/response';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getQuestions() {
    return this.http.get(this.questionUrl);
  }

  getQuestion(idQuestion: string) {
    return this.http.get(`${this.questionUrl}/${idQuestion}`);
  }

  getFirstQuestion() {
    return this.http.get(`${this.questionUrl}/first`);
  }

  getResponsesOneQuestion(idQuestion: string) {
    return this.http.get(`${this.responseUrl}/all/${idQuestion}`);
  }

  getResponses() {
    return this.http.get(`${this.responseUrl}`);
  }

  getResponse(idResponse: string) {
    return this.http.get(`${this.responseUrl}/${idResponse}`);
  }
}
