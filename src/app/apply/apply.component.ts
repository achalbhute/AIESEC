import { Component, OnInit, Input } from '@angular/core';
//import $ from 'jquery';
import {ProcessService} from '../process.service'

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css'],
})
export class ApplyComponent implements OnInit {

  @Input('apply') jsonObj:any;
  constructor(private _process : ProcessService) {
   }

  ngOnInit() {
    
  }

  onClick(number: Number)
  {
    alert("hello");
    this._process.updateData(number).subscribe(result =>{
      this.jsonObj =result;
    })
  }
}
