import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { UserServiceClient } from '../services/user.service.client';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    navbar = false;
    user: any = {};

    constructor(private router: Router, private userService: UserServiceClient) { }

    ngOnInit() {
        this.getUser();
    }

    getUser = () => {
        this.userService.currentUser()
            .then(user => this.user = user, () => this.user = this.user);
    }

    toggleNavbar = () => {
        this.navbar = !this.navbar;
    }

    profile = () => this.router.navigate(['profile']);
    register = () => this.router.navigate(['register']);
    login = () => this.router.navigate(['login']);
    quiz = () => this.router.navigate(['quiz']);
    logout = () => this.userService.logout()
        .then(() => {
            this.router.navigate(['login']);
            this.getUser();
        })

}
