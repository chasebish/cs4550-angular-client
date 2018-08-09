import { Injectable } from '../../../node_modules/@angular/core';

@Injectable()
export class EnrollServiceClient {

    private NODE_WHITEBOARD_URL = 'https://whiteboard-node-chasebish.herokuapp.com/api';

    enrollStudent = (studentId, sectionId) => {
        return fetch(`${this.NODE_WHITEBOARD_URL}/student/${studentId}/section/${sectionId}`, {
            method: 'POST',
            credentials: 'include'
        })
            .then(response => response.json());
    }

    dropSection = (studentId, sectionId, enrollmentId) => {
        return fetch(`${this.NODE_WHITEBOARD_URL}/student/${studentId}/section/${sectionId}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ enrollmentId })
        });
    }

    studentSections = studentId => {
        return fetch(`${this.NODE_WHITEBOARD_URL}/student/${studentId}/section`, {
            credentials: 'include'
        })
            .then(response => response.json());
    }
}
