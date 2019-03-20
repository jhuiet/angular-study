import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Output() navigationPage = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onSelect(page: string) {
    this.navigationPage.emit(page);
  }

}
