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
  required : string;

 ngOnInit() {
   this.getPosts();    
 }

 getPosts(){
   this._process.getPost().subscribe(result => {
    // set(result);
       this.jsonObj =result;
   });
}
 set(Object ){
//var sin_obj = $filter('filter')(this.jsonObj,function(d){return d.id === 2})[0];
//return this.jsonObj.find();
}
}
