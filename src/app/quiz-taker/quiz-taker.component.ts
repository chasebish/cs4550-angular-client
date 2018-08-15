import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { QuizServiceClient } from '../services/quiz.service.client';
import { QuestionServiceClient } from '../services/question.service.client';
import { UserServiceClient } from '../services/user.service.client';

@Component({
    selector: 'app-quiz-taker',
    templateUrl: './quiz-taker.component.html',
    styleUrls: ['./quiz-taker.component.css']
})
export class QuizTakerComponent implements OnInit {

    quizId: '';
    quiz: {};
    questions = [];
    selectedChoice = '';

    constructor(private quizService: QuizServiceClient, private questionService: QuestionServiceClient,
        private userService: UserServiceClient, private activatedRoute: ActivatedRoute, private router: Router) { }

    getQuestions = quiz => {
        for (const questionId of quiz.questions) {
            this.questionService.findQuestionById(questionId)
                .then(question => {
                    if (question.questionType === 'FILL_BLANKS') { question.fillBlanksAnswers = {}; }
                    this.questions.push(question);
                });
        }
    }

    ngOnInit() {
        this.userService.currentUser()
            .then(() => { return; }, () => {
                this.router.navigate(['login']);
            });
        this.activatedRoute.params.subscribe(params => {
            this.quizId = params.quizId;
            this.quizService.findQuizById(params.quizId)
                .then(quiz => {
                    this.getQuestions(quiz);
                    this.quiz = quiz;
                }, () => console.warn('Error getting Quiz'));
        });
    }

    trueFalseClick = (question, answer) => {
        question.trueFalseAnswer = answer;
    }

    selectChoice = (question, choiceValue) => {
        console.log(choiceValue);
        this.selectedChoice = choiceValue;
        question.multipleChoiceAnswer = choiceValue;
    }

    cancel = () => {
        this.router.navigate(['quiz']);
    }

    submit = (quiz, questions) => {
        const submission = {
            student: 'Chase',
            quiz: quiz._id,
            answers: questions,
            timestamp: new Date()
        };

        console.log(submission);
    }

}
