import { Component, Inject, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { APP_BASE_HREF } from '@angular/common';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(@Inject(APP_BASE_HREF) private baseHref:string, private _sanitizer: DomSanitizer,private location: Location) { 

  }





}
