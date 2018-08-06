import { Injectable } from '../../../node_modules/@angular/core';

@Injectable()
export default class CourseServiceClient {

    private WHITEBOARD_URL = 'https://whiteboard-server-chasebish.herokuapp.com';

    findAllCourses() {
        return fetch(`${this.WHITEBOARD_URL}/api/course`)
            .then(response => response.json());
    }
}
