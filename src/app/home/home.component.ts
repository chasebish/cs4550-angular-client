import { Component, OnInit } from '@angular/core';
import { CourseServiceClient } from '../services/course.service.client';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    courses: any = [];

    constructor(private courseService: CourseServiceClient) { }

    ngOnInit() {
        this.courseService.findAllCourses()
            .then(courses => this.courses = courses);
    }

}
