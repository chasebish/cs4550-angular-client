import { Component, OnInit } from '@angular/core';
import { CourseServiceClient } from '../services/course.service.client';
import { SectionServiceClient } from '../services/section.service.client';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    courses: any = [];
    selectedCourse: any = {};
    section: any = {};
    sections: any = [];
    selectedSection: any = {};
    openModal = false;


    closeResult: string;

    constructor(private sectionService: SectionServiceClient, private courseService: CourseServiceClient,
        private modalService: NgbModal) { }

    ngOnInit() {
        this.courseService.findAllCourses()
            .then(courses => this.courses = courses);
    }

    clear = () => {
        this.section = {};
        this.selectedSection = {};
    }

    selectCourse = selectedCourse => {
        this.selectedCourse = selectedCourse;
        this.sectionService.findSectionsForCourse(selectedCourse.id)
            .then(sections => this.sections = sections);
    }

    selectSection = selectedSection => {
        this.selectedSection = selectedSection;
        this.section = this.selectedSection;
    }

    deleteSection = selectedSection => {
        const deletedSection = selectedSection;
        this.sectionService.deleteSection(selectedSection)
            .then(() => {
                return this.sectionService.findSectionsForCourse(this.selectedCourse.id)
                    .then(sections => this.sections = sections)
                    .then(() => { if (this.selectedSection === deletedSection) { this.clear(); } });
            },
                () => alert('Could not delete section'));
    }

    updateSection = selectedSection => {
        if (!selectedSection.title) {
            alert('Please add a section name');
            return;
        }
        if (!selectedSection.seats) {
            alert('Please add a section seats');
            return;
        }
        if (isNaN(selectedSection.seats)) {
            alert('Section seats must be a valid number');
            return;
        }

        this.sectionService.updateSection(selectedSection)
            .then(() => {
                return this.sectionService.findSectionsForCourse(this.selectedCourse.id)
                    .then(sections => this.sections = sections)
                    .then(() => this.clear())
                    .then(() => alert('Section updated!'));
            },
                () => alert('Could not update section'));

    }

    addSection = (section, courseId) => {

        if (!courseId) {
            alert('Please select a course before adding a section');
            return;
        }

        if (!section.title) {
            alert('Please add a section name');
            return;
        }

        if (!section.seats) {
            alert('Please add a section seats');
            return;
        }

        if (isNaN(section.seats)) {
            alert('Section seats must be a valid number');
            return;
        }

        section.courseId = this.selectedCourse.id;
        this.sectionService.createSection(section, courseId)
            .then(() => {
                return this.sectionService.findSectionsForCourse(this.selectedCourse.id);
            })
            .then(sections => this.sections = sections)
            .then(() => this.clear());
    }
}
