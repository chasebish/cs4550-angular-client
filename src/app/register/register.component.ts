import { Component, OnInit } from '@angular/core';
import { UserServiceClient } from '../services/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    private username: String;
    private password: String;
    private confirmPassword: String;

    constructor(private userService: UserServiceClient) { }

    register = (username, password, confirmPassword) => {

        if (password !== confirmPassword) {
            console.log(username, password, confirmPassword);
            alert('Passwords must be the same');
            return;
        }

        const user = {
            username,
            password,
        };
        console.log(user);
        this.userService.register(user);
    }

    ngOnInit() {
    }

}
