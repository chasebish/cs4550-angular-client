import { Component, OnInit } from '@angular/core';
import { UserServiceClient } from '../services/user.service.client';
import { EnrollServiceClient } from '../services/enroll.service.client';
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
    phone: String;
    email: String;
    address: String;
    role: String;

    userSections: any = [];

    constructor(private router: Router, private userService: UserServiceClient, private enrollService: EnrollServiceClient) { }

    ngOnInit() {
        this.userService.currentUser()
            .then(user => {
                this.username = user.username;
                this.password = user.password;
                this.firstName = user.firstName;
                this.lastName = user.lastName;
                this.phone = user.phone;
                this.email = user.email;
                this.address = user.address;
                this.role = user.role;

                this.enrollService.studentSections(user._id)
                    .then(enrollments => this.enrollmentsToSections(enrollments));
            }, () => {
                this.router.navigate(['login']);
                alert('You aren\'t logged in!');
            });
    }

    enrollmentsToSections = enrollments => {
        this.userSections = enrollments.map(enrollment => {
            const section = enrollment.sectionId;
            section.enrollmentId = enrollment._id;
            return section;
        });
    }

    updateUser = (password, firstName, lastName, phone, email, address) => {
        const newUser = {
            password,
            firstName,
            lastName,
            phone,
            email,
            address,
        };
        this.userService.updateUser(newUser)
            .then(() => alert('Profile Updated!'), () => alert('There was an issue updating your profile'));
    }

    logout = () => {
        this.userService.logout()
            .then(() => this.router.navigate(['login']), () => alert('Logout error'));
    }

    adminPage = () => this.router.navigate(['admin']);

}
