import { Component, OnInit } from '@angular/core';
import { UserServiceClient } from '../services/user.service.client';
import { Router } from '../../../node_modules/@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    username: String;
    password: String;
    firstName: String;
    lastName: String;

    constructor(private router: Router, private userService: UserServiceClient) { }

    ngOnInit() {
        this.userService.currentUser()
            .then(user => {
                this.username = user.username;
                this.password = user.password;
                this.firstName = user.firstName;
                this.lastName = user.lastName;
            }, () => {
                this.router.navigate(['login']);
                alert('You aren\'t logged in!');
            });
    }

    logout = () => {
        this.userService.logout()
            .then(() => this.router.navigate(['login']), () => alert('Logout error'));
    }

}
