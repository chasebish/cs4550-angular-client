import { Injectable } from '../../../node_modules/@angular/core';
import { NODE_WHITEBOARD_URL } from '../constants';

@Injectable()
export class QuizServiceClient {

    findAllQuizzes = () => {
        return fetch(`${NODE_WHITEBOARD_URL}/quiz`)
            .then(response => response.json());
    }

    findQuizById = quizId => {
        return fetch(`${NODE_WHITEBOARD_URL}/quiz/${quizId}`)
            .then(response => response.json());
    }
}
