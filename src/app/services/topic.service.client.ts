import { Injectable } from '../../../node_modules/@angular/core';

@Injectable()
export class TopicServiceClient {

    private WHITEBOARD_URL = 'https://whiteboard-server-chasebish.herokuapp.com/api';

    findTopicsForLesson(courseId: String, moduleId: String, lessonId: String) {
        return fetch(`${this.WHITEBOARD_URL}/course/${courseId}/module/${moduleId}/lesson/${lessonId}/topic`)
            .then(response => response.json());
    }
}
