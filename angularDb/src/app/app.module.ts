import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AddDataComponent } from './add-data/add-data.component';
import { EditDataComponent } from './edit-data/edit-data.component';
//import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
//import {MenuItem} from 'primeng/api';                 //api



@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    HomeComponent,
    UserComponent,
    AddDataComponent,
    EditDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //AccordionModule,

    RouterModule.forRoot([
      { path:'', component: HomeComponent },
      { path:'data/:id', component: UserComponent },
      { path:'data', component: DataComponent },
      { path:'add', component: AddDataComponent },
      { path:'edit', component: EditDataComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
