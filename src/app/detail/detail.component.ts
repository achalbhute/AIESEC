import { Component, OnInit, Input } from '@angular/core';
import { ProcessService } from '../process.service'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private _process: ProcessService) {
  }

  @Input('detail') jsonObj: any;
  required: string;

  ngOnInit() {
  }
  
  set(Object) {
    //var sin_obj = $filter('filter')(this.jsonObj,function(d){return d.id === 2})[0];
    //return this.jsonObj.find();
  }
}
