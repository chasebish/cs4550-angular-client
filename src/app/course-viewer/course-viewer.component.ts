import { Component, OnInit } from '@angular/core';
import { ModuleServiceClient } from '../services/module.service.client';
import { LessonServiceClient } from '../services/lesson.service.client';
import { TopicServiceClient } from '../services/topic.service.client';
import { WidgetServiceClient } from '../services/widget.service.client';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

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

    selectedModule: string;
    selectedLesson: string;
    selectedTopic: string;

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

}
