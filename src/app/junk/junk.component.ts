import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-junk',
  templateUrl: './junk.component.html',
  styleUrls: ['./junk.component.css']
})
export class JunkComponent implements OnInit {

  lForm: FormGroup;
  // data: any;

  constructor(private lf: FormBuilder, private http: HttpClient) {
    this.lForm = lf.group({
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'password': [null, Validators.required],
      'rememberme': [false]
    });
  }

  doLogin(post) {
    const postbody = {
      'email': post.email,
      'password': post.password
    };
    this.http.post('http://localhost:3000/login', postbody).subscribe(data => {
      sessionStorage.setItem('Authorization', data['Authorization']);
      console.log(data);
      console.log('Route to the home page');
    });
  }

  ngOnInit() {
  }

}
