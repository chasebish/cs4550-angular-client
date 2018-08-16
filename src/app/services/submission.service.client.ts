import { Injectable } from '../../../node_modules/@angular/core';
import { NODE_WHITEBOARD_URL } from '../constants';

@Injectable()
export class SubmissionServiceClient {

    submit = (submission, quizId) => {
        return fetch(`${NODE_WHITEBOARD_URL}/quiz/${quizId}/submission`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(submission)
        })
            .then(response => response.json());
    }

    findSubmissionById = (quizId, submissionId) => {
        return fetch(`${NODE_WHITEBOARD_URL}/quiz/${quizId}/submission/${submissionId}`, {
            credentials: 'include'
        })
            .then(response => response.json());
    }

    findSubmissions = quizId => {
        return fetch(`${NODE_WHITEBOARD_URL}/quiz/${quizId}/submission`, {
            credentials: 'include'
        })
            .then(response => response.json());
    }

}
