import { Component, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterState } from '@angular/router';

@Component({
  selector: 'app-junk',
  templateUrl: './junk.component.html',
  styleUrls: ['./junk.component.css']
})
export class JunkComponent implements OnInit {

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
