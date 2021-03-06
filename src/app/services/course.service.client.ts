import { Injectable } from '../../../node_modules/@angular/core';

@Injectable()
export class CourseServiceClient {

    private WHITEBOARD_URL = 'https://whiteboard-server-chasebish.herokuapp.com/api';

    findAllCourses() {
        return fetch(`${this.WHITEBOARD_URL}/course`)
            .then(response => response.json());
    }
}
