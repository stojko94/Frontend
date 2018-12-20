import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  constructor(private http: HttpClient, private appComp: AppComponent) { }

  

  ngOnInit() {
  }
  
  AddUser(iid:number, iname:string, iSurname:string, iAge:number, iAddress:string, iCity:string, iState:string){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json;charset=utf-8'});
    let options = { headers: headers };
    return this.http.post('http://localhost:8080/myDataBase/webresources/com.test.people1/',{"adress":iAddress,"age":iAge,"city":iCity,"id":iid,"name":iname,"state":iState,"surname":iSurname},options)
    .subscribe(data => {console.log("Sucesfull add user to database", data);},error => {console.log("error", error);});
  }
}
