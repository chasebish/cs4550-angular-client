import { Injectable } from '../../../node_modules/@angular/core';
import { NODE_WHITEBOARD_URL } from '../constants';

@Injectable()
export class UserServiceClient {

    register = user => {
        return fetch(`${NODE_WHITEBOARD_URL}/register`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json());
    }

    login = user => {
        return fetch(`${NODE_WHITEBOARD_URL}/login`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json());
    }

    updateUser = user => {
        return fetch(`${NODE_WHITEBOARD_URL}/profile`, {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json());
    }

    logout = () => {
        return fetch(`${NODE_WHITEBOARD_URL}/logout`, {
            method: 'POST',
            credentials: 'include'
        });
    }

    currentUser = () => {
        return fetch(`${NODE_WHITEBOARD_URL}/profile`, {
            credentials: 'include'
        })
            .then(response => response.json());
    }
}
