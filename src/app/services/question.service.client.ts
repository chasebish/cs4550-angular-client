import { Injectable } from '../../../node_modules/@angular/core';
import { NODE_WHITEBOARD_URL } from '../constants';

@Injectable()
export class QuestionServiceClient {

    findAllQuestions = () => {
        return fetch(`${NODE_WHITEBOARD_URL}/question`)
            .then(response => response.json());
    }

    findQuestionById = questionId => {
        return fetch(`${NODE_WHITEBOARD_URL}/question/${questionId}`)
            .then(response => response.json());
    }
}
