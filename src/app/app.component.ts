import { Component } from '@angular/core';
import {ProcessService} from './process.service'
//var bodyParser = require('body-parser');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _process : ProcessService) {
    this.getPosts();
  }

 jsonObj = {};

    getPosts(){
      this._process.getPost().subscribe(result => {
          this.jsonObj =result;
      });
  }
  //bodyParser.
  }
  