import { Component, OnInit } from '@angular/core';
import { IPeople } from '../people';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { PARAMETERS } from '@angular/core/src/util/decorators';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  people : IPeople;

  constructor(private route: ActivatedRoute, private http: HttpClient, private appComp: AppComponent) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params => {
      return this.http.get<IPeople>("http://localhost:8080/myDataBase/webresources/com.test.people1/"+params.get('id'))
      .subscribe((response) => this.people = response);
    });

    
  }

  DeleteUser(iid:string) {
    return this.http.delete('http://localhost:8080/myDataBase/webresources/com.test.people1/'+iid)
    .subscribe(data => {console.log("Sucesfull delete uset from database", data);},error => {console.log("error", error);});
  }

}
  
