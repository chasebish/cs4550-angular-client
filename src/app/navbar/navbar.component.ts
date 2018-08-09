import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    navbar = false;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    toggleNavbar = () => {
        this.navbar = !this.navbar;
    }

    register = () => this.router.navigate(['register']);
    login = () => this.router.navigate(['login']);
    logout = () => this.router.navigate(['login']);

}
