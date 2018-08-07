import { Component, OnInit } from '@angular/core';
import { CourseServiceClient } from '../services/course.service.client';

@Component({
    selector: 'app-course-navigator',
    templateUrl: './course-navigator.component.html',
    styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

    courses: object[] = [];
    selectedCourse: object = {};
    selectedModule: object = {};
    selectedLesson: object = {};
    selectedTopic: object = {};
    selectedWidget: object = {};

    constructor(private courseService: CourseServiceClient) { }

    ngOnInit() {
        this.courseService
            .findAllCourses()
            .then(courses => this.courses = courses);
    }

    selectCourse = (selectedCourse) => this.selectedCourse = selectedCourse;
    selectModule = (selectedModule) => this.selectedModule = selectedModule;
    selectLesson = (selectedLesson) => this.selectedLesson = selectedLesson;
    selectTopic = (selectedTopic) => this.selectedTopic = selectedTopic;
    selectWidget = (selectedWidget) => this.selectedWidget = selectedWidget;

}
