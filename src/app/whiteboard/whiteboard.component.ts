import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
    selector: 'app-whiteboard',
    templateUrl: './whiteboard.component.html',
    styleUrls: ['./whiteboard.component.css']
})
export class WhiteboardComponent implements OnInit, AfterViewInit {

    constructor(private elementRef: ElementRef) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'rgb(248, 248, 248)';
    }

}
