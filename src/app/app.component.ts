import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'course-app';
  displayPage: string = '';
  introMessage: string = 'Hello, and welcome to the app!';
  newUser: boolean = true;
  ngOnInit() {
  }
  setPage(page: string){
    this.displayPage = page;
  }
  closeModal(){
    this.newUser = false;
  }
}
