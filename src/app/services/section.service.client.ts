import { Injectable } from '../../../node_modules/@angular/core';
import { NODE_WHITEBOARD_URL } from '../constants';

@Injectable()
export class SectionServiceClient {

    enroll = sectionId =>
        fetch(`${NODE_WHITEBOARD_URL}/section/${sectionId}/enroll`, {
            method: 'put',
            credentials: 'include'
        })
            .then(response => response.json())

    findAllSections = () =>
        fetch(`${NODE_WHITEBOARD_URL}/section`)
            .then(response => response.json())

    findSectionsForCourse = courseId =>
        fetch(`${NODE_WHITEBOARD_URL}/course/${courseId}/section`)
            .then(response => response.json())

    createSection = (section, courseId) =>
        fetch(`${NODE_WHITEBOARD_URL}/course/${courseId}/section`, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(section)
        })
            .then(response => response.json())

    deleteSection = section =>
        fetch(`${NODE_WHITEBOARD_URL}/section/${section._id}`, {
            method: 'delete',
            credentials: 'include'
        })

    updateSection = section =>
        fetch(`${NODE_WHITEBOARD_URL}/section/${section._id}`, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(section)
        })
            .then(response => response.json())

    getSection = sectionId =>
        fetch(`${NODE_WHITEBOARD_URL}/section/${sectionId}`)
            .then(response => response.json())


    addSeat = sectionId =>
        fetch(`${NODE_WHITEBOARD_URL}/section/${sectionId}/addseat`, {
            method: 'put'
        })

    subSeat = sectionId =>
        fetch(`${NODE_WHITEBOARD_URL}/section/${sectionId}/subseat`, {
            method: 'put'
        })
}
