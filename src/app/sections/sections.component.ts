import { Component, OnInit } from '@angular/core';
import { CourseServiceClient } from '../services/course.service.client';
import { SectionServiceClient } from '../services/section.service.client';

@Component({
    selector: 'app-sections',
    templateUrl: './sections.component.html',
    styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

    courses: any = [];
    selectedCourse: any = {};
    section: any = {};
    sections: any = [];

    constructor(private sectionService: SectionServiceClient, private courseService: CourseServiceClient) { }

    ngOnInit() {
        this.courseService.findAllCourses()
            .then(courses => this.courses = courses);
    }

    selectCourse = (selectedCourse) => {
        this.selectedCourse = selectedCourse;
        this.sectionService.findSectionsForCourse(selectedCourse.id)
            .then(sections => this.sections = sections);
    }

    addSection = section => {

        if (!this.selectedCourse.id) {
            alert('Please select a course before adding a section');
            return;
        }

        if (!section.title) {
            alert('Please add a section name');
            return;
        }

        section.courseId = this.selectedCourse.id;
        this.sectionService
            .createSection(section)
            .then(() => {
                return this.sectionService.findSectionsForCourse(this.selectedCourse.id);
            })
            .then(sections => this.sections = sections)
            .then(() => this.section = {});
    }
}
