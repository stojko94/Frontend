import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent implements OnInit {

  constructor(private http: HttpClient, private appComp: AppComponent) { }

  ngOnInit() {
  }

  EditUser(iid:number, iname:string, iSurname:string, iAge:number, iAddress:string, iCity:string, iState:string){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json;charset=utf-8'});
    let options = { headers: headers };
    return this.http.put('http://localhost:8080/myDataBase/webresources/com.test.people1/'+iid,{"adress":iAddress,"age":iAge,"city":iCity,"id":iid,"name":iname,"state":iState,"surname":iSurname},options)
    .subscribe(data => {console.log("Sucesfull edit user to database", data);},error => {console.log("error", error);});
  }
}
