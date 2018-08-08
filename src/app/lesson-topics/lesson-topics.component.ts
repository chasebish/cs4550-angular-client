import { Component, OnInit } from '@angular/core';
import { LessonServiceClient } from '../services/lesson.service.client';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
    selector: 'app-lesson-topics',
    templateUrl: './lesson-topics.component.html',
    styleUrls: ['./lesson-topics.component.css']
})
export class LessonTopicsComponent implements OnInit {

    topics: any = [];
    courseId: String;
    moduleId: String;
    lessonId: String;
    topicId: String;

    constructor(private lessonService: LessonServiceClient, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.courseId = params.courseId;
            this.moduleId = params.moduleId;
            this.lessonId = params.lessonId;
            this.topicId = params.topicId;
            // this.lessonService.findLessonsForModule(this.courseId, this.moduleId)
            //     .then(lessons => this.lessons = lessons);
        });
    }

}
