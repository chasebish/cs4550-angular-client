import { Component, OnInit } from '@angular/core';
import { LessonServiceClient } from '../services/lesson.service.client';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
    selector: 'app-module-lessons',
    templateUrl: './module-lessons.component.html',
    styleUrls: ['./module-lessons.component.css']
})
export class ModuleLessonsComponent implements OnInit {

    lessons: any = [];
    courseId: String;
    moduleId: String;
    lessonId: String;

    constructor(private lessonService: LessonServiceClient, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.courseId = params.courseId;
            this.moduleId = params.moduleId;
            this.lessonId = params.lessonId;
            if (this.courseId && this.moduleId) {
                this.lessonService.findLessonsForModule(this.courseId, this.moduleId)
                    .then(lessons => this.lessons = lessons);
            }
        });
    }

}
