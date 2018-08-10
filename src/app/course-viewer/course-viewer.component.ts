import { Component, OnInit } from '@angular/core';
import { ModuleServiceClient } from '../services/module.service.client';
import { LessonServiceClient } from '../services/lesson.service.client';
import { TopicServiceClient } from '../services/topic.service.client';
import { WidgetServiceClient } from '../services/widget.service.client';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { CourseServiceClient } from '../services/course.service.client';

@Component({
    selector: 'app-course-viewer',
    templateUrl: './course-viewer.component.html',
    styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

    modules: any = [];
    lessons: any = [];
    topics: any = [];
    widgets: any = [];

    courseId: String;
    moduleId: String;
    lessonId: String;
    topicId: String;

    constructor(private moduleService: ModuleServiceClient, private lessonService: LessonServiceClient,
        private topicService: TopicServiceClient, private widgetService: WidgetServiceClient, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.courseId = params.courseId;
        });
        if (this.courseId) {
            this.moduleService.findModulesForCourse(this.courseId)
                .then(modules => this.modules = modules, () => { return; });
        }
    }

    selectModule = selectedModule => {
        this.moduleId = selectedModule.id;
        this.lessonService.findLessonsForModule(this.courseId, this.moduleId)
            .then(lessons => {
                this.lessons = lessons;
                this.lessonId = undefined;
                this.topicId = undefined;
                this.topics = [];
                this.widgets = [];
            }, () => { return; });
    }

    selectLesson = selectedLesson => {
        this.lessonId = selectedLesson.id;
        this.topicService.findTopicsForLesson(this.courseId, this.moduleId, this.lessonId)
            .then(topics => {
                this.topics = topics;
                this.topicId = undefined;
                this.widgets = [];
            }, () => { return; });
    }

    selectTopic = selectedTopic => {
        this.topicId = selectedTopic.id;
        this.widgetService.findWidgetsForTopic(this.courseId, this.moduleId, this.lessonId, this.topicId)
            .then(widgets => {
                this.widgets = widgets.sort((a, b) => a.widgetOrder - b.widgetOrder);
            }, () => { return; });
    }

}
