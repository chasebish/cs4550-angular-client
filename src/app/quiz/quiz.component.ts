import { Component, OnInit } from '@angular/core';
import { QuizServiceClient } from '../services/quiz.service.client';
import { UserServiceClient } from '../services/user.service.client';
import { Router } from '../../../node_modules/@angular/router';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

    quizzes = [];

    constructor(private quizService: QuizServiceClient, private userService: UserServiceClient, private router: Router) { }

    ngOnInit() {
        this.userService.currentUser()
            .then(() => { return; }, () => {
                this.router.navigate(['login']);
            });
        this.quizService.findAllQuizzes()
            .then(quizzes => this.quizzes = quizzes);
    }

    quizNav = quizId => this.router.navigate(['quiz/' + quizId]);
    submissionsNav = quizId => this.router.navigate(['quiz/' + quizId + '/submission']);

}
