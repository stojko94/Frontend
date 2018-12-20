import { Component, OnInit } from '@angular/core';
import { IPeople } from '../people';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  people : IPeople[];
  postData : string;

  constructor(private http: HttpClient, private appComp: AppComponent){ }

  /*ngOnInit() : Observable<IPeople[]>{
    return this.http.get<IPeople[]>("http://localhost:8080/myDataBase/webresources/com.test.people1/")
    .map((response) => this.people = response);
  }*/
  ngOnInit(){
    this.appComp.getPeople().subscribe(data => this.people = data);
  }

}
