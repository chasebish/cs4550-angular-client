import { Injectable } from '../../../node_modules/@angular/core';

@Injectable()
export class WidgetServiceClient {

    private WHITEBOARD_URL = 'https://whiteboard-server-chasebish.herokuapp.com/api';

    findWidgetsForTopic(courseId: String, moduleId: String, lessonId: String, topicId: String) {
        return fetch(`${this.WHITEBOARD_URL}/course/${courseId}/module/${moduleId}/lesson/${lessonId}/topic/${topicId}/widget`)
            .then(response => response.json());
    }
}
