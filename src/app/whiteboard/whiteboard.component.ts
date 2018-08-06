import { Component, OnInit } from '@angular/core';
import CourseServiceClient from '../services/course.service.client';

@Component({
  selector: 'app-whiteboard',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.css']
})
export class WhiteboardComponent implements OnInit {

  private courses: object[] = [];
  private selectedCourse: object = {};
  private selectedModule: object = {};
  private selectedLesson: object = {};
  private selectedTopic: object = {};
  private selectedWidget: object = {};

  constructor(private courseService: CourseServiceClient) { }

  ngOnInit() {
    this.courseService
      .findAllCourses()
      .then(courses => this.courses = courses);
  }

  selectCourse = (selectedCourse) => this.selectedCourse = selectedCourse;
  selectModule = (selectedModule) => this.selectedModule = selectedModule;
  selectLesson = (selectedLesson) => this.selectedLesson = selectedLesson;
  selectTopic = (selectedTopic) => this.selectedTopic = selectedTopic;
  selectWidget = (selectedWidget) => this.selectedWidget = selectedWidget;

}
