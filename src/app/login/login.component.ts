import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private http: HttpClient) { }

  login() {
    // tslint:disable-next-line:max-line-length
    const obs: Observable<any> = this.http.post<any>("http://localhost:5000/api/Account/login", { "username": this.username, "myPassowrd": this.password});

    obs.subscribe((res: any) => {
      localStorage.setItem('token', res.myToken);
    });
  }

  ngOnInit() {
  }
}



