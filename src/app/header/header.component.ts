import { Component, OnInit, Input } from '@angular/core';
import {ProcessService} from '../process.service'
//import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() hero:any;
   //$: any;
  constructor(private _process : ProcessService) {
  
   }
  ngOnInit() {   
  }

  // ngAfterViewInit(){
  //  $('#title').editable({
  //     type:  'text',
  //     pk:    1,
  //     name:  'title',
  //     url:   'post.php',  
  //     title: 'Enter title'
  //  });
  // }
}
