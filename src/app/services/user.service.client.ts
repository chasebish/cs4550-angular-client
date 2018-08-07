import { Injectable } from '../../../node_modules/@angular/core';

@Injectable()
export class UserServiceClient {

    private WHITEBOARD_URL = 'http://localhost:3000';

    register = user => {
        return fetch(`${this.WHITEBOARD_URL}/api/register`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
    }

    login = user => {
        return fetch(`${this.WHITEBOARD_URL}/api/login`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
    }

    logout = () => {
        return fetch(`${this.WHITEBOARD_URL}/api/logout`, {
            method: 'POST',
            credentials: 'include'
        });
    }
}
