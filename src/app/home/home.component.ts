import { Component, OnInit } from '@angular/core';
import { CourseServiceClient } from '../services/course.service.client';
import { UserServiceClient } from '../services/user.service.client';
import { EnrollServiceClient } from '../services/enroll.service.client';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    courses: any = [];
    user: any = {};
    userSections: any = [];

    constructor(private courseService: CourseServiceClient, private userService: UserServiceClient,
        private enrollService: EnrollServiceClient) { }

    ngOnInit() {
        this.courseService.findAllCourses()
            .then(courses => this.courses = courses);
        this.userService.currentUser()
            .then(user => {
                this.user = user;
                this.enrollService.studentSections(this.user._id)
                    .then(enrollments => this.enrollmentsToSections(enrollments));
            }, () => { return; });
    }

    enrollmentsToSections = enrollments => {
        this.userSections = enrollments.map(enrollment => {
            const section = enrollment.sectionId;
            section.enrollmentId = enrollment._id;
            return section;
        });
    }

}
