import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
	category = "";
  constructor(private http: HttpClient)  { }
	data:  any;

  ngOnInit(): void {
	  var data;
        this.http.get('./assets/gm-categories.json',{responseType:"json"}).subscribe(
        response => {
            this.data = response;
            console.log(this.data);
       });
    }
}
