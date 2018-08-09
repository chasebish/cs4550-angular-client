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

    createSection = (section, courseId) =>
        fetch(`${this.NODE_WHITEBOARD_URL}/course/${courseId}/section`, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(section)
        })
            .then(response => response.json())

    deleteSection = section =>
        fetch(`${this.NODE_WHITEBOARD_URL}/section/${section._id}`, {
            method: 'delete',
            credentials: 'include'
        })

    updateSection = section =>
        fetch(`${this.NODE_WHITEBOARD_URL}/section/${section._id}`, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(section)
        })
            .then(response => response.json())

    getSection = sectionId =>
        fetch(`${this.NODE_WHITEBOARD_URL}/section/${sectionId}`)
            .then(response => response.json())


    addSeat = sectionId =>
        fetch(`${this.NODE_WHITEBOARD_URL}/section/${sectionId}/addseat`, {
            method: 'put'
        })

    subSeat = sectionId =>
        fetch(`${this.NODE_WHITEBOARD_URL}/section/${sectionId}/subseat`, {
            method: 'put'
        })
}
