import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input()
  showSideBar = false;

  @Output()
  sidebar = function (event) {
    event.preventDefault();
    console.log('clicked');
    this.showSideBar = !this.showSideBar;
  };

  @Output()
  focusContent = function(event){
    this.showSideBar = false;
  };

  constructor() { }

  ngOnInit() {
  }

}
