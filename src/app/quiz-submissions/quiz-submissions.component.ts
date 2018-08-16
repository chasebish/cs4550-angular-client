import { Component, OnInit } from '@angular/core';
import { SubmissionServiceClient } from '../services/submission.service.client';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { QuizServiceClient } from '../services/quiz.service.client';
import { UserServiceClient } from '../services/user.service.client';

@Component({
    selector: 'app-quiz-submissions',
    templateUrl: './quiz-submissions.component.html',
    styleUrls: ['./quiz-submissions.component.css']
})
export class QuizSubmissionsComponent implements OnInit {

    user = {};
    quizId: '';
    quiz = {};
    submissions = [];

    constructor(private submissionService: SubmissionServiceClient, private quizService: QuizServiceClient,
        private userService: UserServiceClient, private activatedRoute: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.userService.currentUser()
            .then(user => this.user = user, () => console.warn('not logged in'));
        this.activatedRoute.params.subscribe(params => {
            this.quizId = params.quizId;
            this.quizService.findQuizById(params.quizId)
                .then(quiz => this.quiz = quiz);
            this.submissionService.findSubmissions(this.quizId)
                .then(submissions => {
                    this.submissions = submissions;
                }, () => console.warn('Error getting submissions for quizID ' + params.quizId));
        });
    }

    submissionDate = submission => new Date(submission.timestamp).toLocaleString();

    submissionNav = submissionId => this.router.navigate([`/quiz/${this.quizId}/submission/${submissionId}`]);

}
