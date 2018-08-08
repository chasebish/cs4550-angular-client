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
    selectedModuleId: String;

    constructor(private moduleService: ModuleServiceClient, private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            this.selectedModuleId = params.moduleId;
            this.moduleService.findModulesForCourse(params.courseId)
                .then(modules => this.modules = modules);
        });
    }

    ngOnInit() {
    }

}
