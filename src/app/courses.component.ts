import { Component } from '@angular/core';
import { CoursesService } from './courses.service';



@Component( {
    selector: 'courses',
    template: `
        {{ course.title | uppercase | lowercase}} <br/>
        {{ course.students | number }}<br/>
        {{ course.rating | number:'1.2-2' }}<br/>
        {{ course.price | currency:'AUD':true:'3.2-2' }}<br/>
        {{ course.releaseDate | date:'shortDate' }} <br />


        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />



        <div (click)="onDivClicked()">
        
            <button class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive ? 'blue' : 'grey' " (click)= "onSave($event)">Save</button>
        </div>
        
        <h2>{{ getTitle() }}</h2>
        <h2 [textContent]="title"></h2>


        <img src="{{ imageUrl }}" />
        <img [src]="imageUrl" />



        <ul>
            <li *ngFor="let course of courses">
            {{ course }}
            </li>
        </ul>


        <table>
            <tr>
                <td [attr.colspan]="colSpan"></td>
            </tr>
        </table>
    `
})
export class CoursesComponent {
    title = "List of courses";
    imageUrl = "http://loremflickr.com/400/200";
    colSpan = 2;
    courses;
    isActive = true;
    email = "me@example.com";

    course = {
        title: "The complete angular course",
        rating: 4.9,
        students: 30123,
        price: 99.95,
        releaseDate: new Date(2019, 1, 1)
      }


    constructor(service: CoursesService) {  
        this.courses = service.getCourses();
    }


    getTitle() {
        return this.title;
    }


    onDivClicked() {
        console.log("div was clicked");
    }
    onSave($event) {
        $event.stopPropagation();
        console.log('button was clicked', $event);
    }

    onKeyUp() {
        console.log(this.email);
        
    }
}