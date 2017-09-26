import { Component, OnInit } from '@angular/core';
import {ProcessService} from '../process.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
