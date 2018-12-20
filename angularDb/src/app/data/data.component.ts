import { Component, OnInit } from '@angular/core';
import { IPeople } from '../people';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  people : IPeople[];

  constructor(private http: HttpClient, private appComp: AppComponent){}
  
/*
  ngOnInit() : Observable<IPeople[]>{
    return this.http.get<IPeople[]>("http://localhost:8080/myDataBase/webresources/com.test.people1/")
    .map((response: Response) => <IPeople[]>response.json());
  }
*/
ngOnInit(){
  this.appComp.getPeople().subscribe(data => this.people = data);
}
}
