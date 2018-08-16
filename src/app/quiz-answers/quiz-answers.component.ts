import { Component, OnInit } from '@angular/core';
import { SubmissionServiceClient } from '../services/submission.service.client';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
    selector: 'app-quiz-answers',
    templateUrl: './quiz-answers.component.html',
    styleUrls: ['./quiz-answers.component.css']
})
export class QuizAnswersComponent implements OnInit {

    quizId = '';
    submissionId = '';
    submissions = [];

    constructor(private submissionService: SubmissionServiceClient, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.quizId = params.quizId;
            this.submissionId = params.submissionId;
            this.submissionService.findSubmissionById(params.quizId, params.submissionId)
                .then(submissions => this.submissions = submissions);
        });
    }

}
