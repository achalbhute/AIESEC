import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import {ProcessService} from '../process.service'

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css'],
})
export class ApplyComponent implements OnInit {

  constructor(private _process : ProcessService) { }

  jsonObj : Object= {};

  ngOnInit() {
    // $('#aa').affix({
    //   offset: {
    //     top: 100,
    //     bottom: function () {
    //       return (this.bottom = $('.footer').outerHeight(true))
    //     }
    //   }
    // })
  }

  getPosts(){
    this._process.getPost().subscribe(result => {
        this.jsonObj =result;
    });
}
}
