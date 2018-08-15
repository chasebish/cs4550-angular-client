import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { QuizServiceClient } from '../services/quiz.service.client';
import { QuestionServiceClient } from '../services/question.service.client';

@Component({
    selector: 'app-quiz-taker',
    templateUrl: './quiz-taker.component.html',
    styleUrls: ['./quiz-taker.component.css']
})
export class QuizTakerComponent implements OnInit {

    quizId: '';
    quiz: {};
    questions = [];

    constructor(private quizService: QuizServiceClient, private questionService: QuestionServiceClient,
        private activatedRoute: ActivatedRoute) { }

    getQuestions = quiz => {
        for (const questionId of quiz.questions) {
            this.questionService.findQuestionById(questionId)
                .then(question => {
                    this.questions.push(question);
                });
        }
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.quizId = params.quizId;
            this.quizService.findQuizById(params.quizId)
                .then(quiz => {
                    this.getQuestions(quiz);
                }, () => console.warn('Error getting Quiz'));
        });
    }

}
