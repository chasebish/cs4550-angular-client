import { Component, OnInit } from '@angular/core';
import { WidgetServiceClient } from '../services/widget.service.client';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
    selector: 'app-topic-widgets',
    templateUrl: './topic-widgets.component.html',
    styleUrls: ['./topic-widgets.component.css']
})
export class TopicWidgetsComponent implements OnInit {

    widgets: any = [];
    courseId: String;
    moduleId: String;
    lessonId: String;
    topicId: String;
    widgetId: String;

    constructor(private widgetService: WidgetServiceClient, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.courseId = params.courseId;
            this.moduleId = params.moduleId;
            this.lessonId = params.lessonId;
            this.topicId = params.topicId;
            if (this.courseId && this.moduleId && this.lessonId && this.topicId) {
                this.widgetService.findWidgetsForTopic(this.courseId, this.moduleId, this.lessonId, this.topicId)
                    .then(widgets => this.widgets = widgets.sort((a, b) => a.widgetOrder - b.widgetOrder));
            }
        });
    }

}
