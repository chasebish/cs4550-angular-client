import { Injectable } from '../../../node_modules/@angular/core';

@Injectable()
export class LessonServiceClient {

    private WHITEBOARD_URL = 'https://whiteboard-server-chasebish.herokuapp.com/api';

    findLessonsForModule(courseId: String, moduleId: String) {
        return fetch(`${this.WHITEBOARD_URL}/course/${courseId}/module/${moduleId}/lesson`)
            .then(response => response.json());
    }
}
