import { Component, OnInit } from '@angular/core';
import { TopicServiceClient } from '../services/topic.service.client';
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

    constructor(private topicService: TopicServiceClient, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.courseId = params.courseId;
            this.moduleId = params.moduleId;
            this.lessonId = params.lessonId;
            this.topicId = params.topicId;
            if (this.courseId && this.moduleId && this.lessonId) {
                this.topicService.findTopicsForLesson(this.courseId, this.moduleId, this.lessonId)
                    .then(topics => this.topics = topics);
            }
        });
    }

}
