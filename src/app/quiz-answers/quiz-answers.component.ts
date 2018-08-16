import { Component, OnInit } from '@angular/core';
import { SubmissionServiceClient } from '../services/submission.service.client';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
    selector: 'app-quiz-answers',
    templateUrl: './quiz-answers.component.html',
    styleUrls: ['./quiz-answers.component.css']
})
export class QuizAnswersComponent implements OnInit {

    quizId = '';
    submissionId = '';
    submission = {};
    answers = [];

    constructor(private submissionService: SubmissionServiceClient, private activatedRoute: ActivatedRoute, private Route: Router) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.quizId = params.quizId;
            this.submissionId = params.submissionId;
            this.submissionService.findSubmissionById(params.quizId, params.submissionId)
                .then(submission => {
                    this.submission = submission;
                    this.answers = submission.answers;
                });
        });
    }

    backToSubmissions = () => this.Route.navigate(['/quiz/' + this.quizId + '/submission']);

}
