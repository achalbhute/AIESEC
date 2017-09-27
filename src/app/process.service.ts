import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ProcessService {

  constructor(private http: Http) { }

  getPost(){
    return this.http.get('http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities/525?access_token=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c')
    .map((response: Response) => response.json());
  }

  updateData(){
    // return this.http.patch('',body, this.options)
    // .map()
  }
}
