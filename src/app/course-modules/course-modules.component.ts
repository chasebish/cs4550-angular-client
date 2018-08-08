import { Component, OnInit } from '@angular/core';
import { ModuleServiceClient } from '../services/module.service.client';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
    selector: 'app-course-modules',
    templateUrl: './course-modules.component.html',
    styleUrls: ['./course-modules.component.css']
})
export class CourseModulesComponent implements OnInit {

    modules: any = [];
    courseId: String;
    moduleId: String;

    constructor(private moduleService: ModuleServiceClient, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.courseId = params.courseId;
            this.moduleId = params.moduleId;
            if (this.courseId) {
                this.moduleService.findModulesForCourse(this.courseId)
                    .then(modules => this.modules = modules);
            }
        });
    }

}
