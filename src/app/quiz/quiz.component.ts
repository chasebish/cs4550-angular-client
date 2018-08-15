import { Component, OnInit } from '@angular/core';
import { QuizServiceClient } from '../services/quiz.service.client';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

    quizzes = [];

    constructor(private quizService: QuizServiceClient) { }

    ngOnInit() {
        this.quizService.findAllQuizzes()
            .then(quizzes => this.quizzes = quizzes);
    }

}
