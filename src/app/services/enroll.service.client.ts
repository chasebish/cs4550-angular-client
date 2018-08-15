import { Injectable } from '../../../node_modules/@angular/core';
import { NODE_WHITEBOARD_URL } from '../constants';

@Injectable()
export class EnrollServiceClient {

    enrollStudent = (studentId, sectionId) => {
        return fetch(`${NODE_WHITEBOARD_URL}/student/${studentId}/section/${sectionId}`, {
            method: 'POST',
            credentials: 'include'
        })
            .then(response => response.json());
    }

    dropSection = (studentId, sectionId, enrollmentId) => {
        return fetch(`${NODE_WHITEBOARD_URL}/student/${studentId}/section/${sectionId}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ enrollmentId })
        });
    }

    studentSections = studentId => {
        return fetch(`${NODE_WHITEBOARD_URL}/student/${studentId}/section`, {
            credentials: 'include'
        })
            .then(response => response.json());
    }
}
