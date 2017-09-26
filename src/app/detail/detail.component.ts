import { Component, OnInit } from '@angular/core';
import {ProcessService} from '../process.service'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private _process : ProcessService) {
  }

 jsonObj = {};

 ngOnInit() {
   this.getPosts();    
 }

 getPosts(){
   this._process.getPost().subscribe(result => {
       this.jsonObj =result;
   });
}
}
