import { Injectable } from '../../../node_modules/@angular/core';

@Injectable()
export class SectionServiceClient {

    private NODE_WHITEBOARD_URL = 'http://localhost:3000/api';

    enroll = sectionId =>
        fetch(`${this.NODE_WHITEBOARD_URL}/section/${sectionId}/enroll`, {
            method: 'put',
            credentials: 'include'
        })
            .then(response => response.json())

    findAllSections = () =>
        fetch(`${this.NODE_WHITEBOARD_URL}/section`)
            .then(response => response.json())

    findSectionsForCourse = courseId =>
        fetch(`${this.NODE_WHITEBOARD_URL}/course/${courseId}/section`)
            .then(response => response.json())

    createSection = section =>
        fetch(`${this.NODE_WHITEBOARD_URL}/section`, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(section)
        })
            .then(response => response.json())
}
