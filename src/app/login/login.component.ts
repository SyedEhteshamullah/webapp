import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterState } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  lForm: FormGroup;

  constructor(private lf: FormBuilder, private http: HttpClient, private router: Router) {
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
      this.router.navigate(['/junk']);
    }, err => {
    });
  }

  ngOnInit() {
  }
}
