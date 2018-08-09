import { Component, OnInit } from '@angular/core';
import { SectionServiceClient } from '../services/section.service.client';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { UserServiceClient } from '../services/user.service.client';
import { EnrollServiceClient } from '../services/enroll.service.client';

@Component({
    selector: 'app-course-sections',
    templateUrl: './course-sections.component.html',
    styleUrls: ['./course-sections.component.css']
})
export class CourseSectionsComponent implements OnInit {

    sections: any = [];
    courseId: String;
    user: any = {};
    userSections: any = [];
    userEnrollments: any = [];

    constructor(private sectionService: SectionServiceClient, private userService: UserServiceClient,
        private enrollService: EnrollServiceClient, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.courseId = params.courseId;
            this.sectionService.findSectionsForCourse(this.courseId)
                .then(sections => this.sections = sections);
        });
        this.userService.currentUser()
            .then(user => {
                this.user = user;
                this.enrollService.studentSections(this.user._id)
                    .then(enrollments => this.enrollmentsToSections(enrollments), () => { return; });
            }, () => { return; });
    }

    enrollmentsToSections = enrollments => {
        this.userSections = enrollments.map(enrollment => {
            const section = enrollment.sectionId;
            section.enrollmentId = enrollment._id;
            return section;
        });
    }

    disableSection = section => {
        if (section.seats <= 0) { return true; }
        if (!this.user.username) { return true; }
        for (const userSection of this.userSections) {
            if (userSection._id === section._id) { return true; }
        }
    }

    enroll = section => {
        if (section.seats <= 0) { return; }
        if (!this.user.username) { return; }
        for (const userSection of this.userSections) {
            if (userSection._id === section._id) { return true; }
        }
        return this.enrollService.enrollStudent(this.user._id, section._id)
            .then(() => {
                this.enrollService.studentSections(this.user._id)
                    .then(enrollments => {
                        this.enrollmentsToSections(enrollments);
                        this.subSeat(section._id, this.courseId);
                        this.sectionService.findSectionsForCourse(this.courseId)
                            .then(sections => this.sections = sections);
                    }, () => { return; });
            }, () => { return; });
    }

    dropSection = section => {
        this.enrollService.dropSection(this.user._id, section._id, section.enrollmentId)
            .then(() => {
                return this.enrollService.studentSections(this.user._id)
                    .then(enrollments => {
                        this.enrollmentsToSections(enrollments);
                        this.addSeat(section._id, this.courseId);
                        this.sectionService.findSectionsForCourse(this.courseId)
                            .then(sections => this.sections = sections);
                    }, () => { return; });
            }, () => { return; });
    }

    addSeat = (sectionId, courseId) => {
        this.sectionService.addSeat(sectionId);
        this.sectionService.findSectionsForCourse(courseId)
            .then(sections => this.sections = sections);
    }

    subSeat = (sectionId, courseId) => {
        this.sectionService.subSeat(sectionId);
        this.sectionService.findSectionsForCourse(courseId)
            .then(sections => this.sections = sections);
    }

}
