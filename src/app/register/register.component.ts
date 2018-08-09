import { Component, OnInit } from '@angular/core';
import { UserServiceClient } from '../services/user.service.client';
import { Router } from '../../../node_modules/@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    username: String;
    password: String;
    confirmPassword: String;

    constructor(private router: Router, private userService: UserServiceClient) { }

    register = (username, password, confirmPassword) => {

        if (password !== confirmPassword) {
            alert('Passwords must be the same');
            return;
        }

        const newUser = {
            username,
            password,
            role: 'STUDENT'
        };
        this.userService.register(newUser)
            .then(() => this.router.navigate(['profile']), () => alert('Username not available'));
    }

    login = () => {
        this.router.navigate(['login']);
    }

    ngOnInit() {
    }

}
