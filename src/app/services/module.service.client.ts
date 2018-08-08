import { Injectable } from '../../../node_modules/@angular/core';

@Injectable()
export class ModuleServiceClient {

    private WHITEBOARD_URL = 'https://whiteboard-server-chasebish.herokuapp.com/api';

    findModulesForCourse(courseId: String) {
        return fetch(`${this.WHITEBOARD_URL}/course/${courseId}/module`)
            .then(response => response.json());
    }
}
