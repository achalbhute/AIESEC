import { Component, OnInit, Input } from '@angular/core';
import {ProcessService} from '../process.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() hero:any;

  constructor(private _process : ProcessService) {
    
   }
  ngOnInit() {   
  }

}
