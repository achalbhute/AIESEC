import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ProcessService {

  constructor(private http: Http) { }

  newObj:{};
  getPost(){
    return this.http.get('http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities/525?access_token=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c')
    .map((response: Response) => response.json());
  }

  updateData(data : any){//number = {'opportunity[title]':'value'} or opportunity[title]=value
  data = {'opportunity[title]':'value'};
    let header= new Headers({'Content-Type': 'application/x-www-form-urlencoded', 'Accept':'application/json'});
    return this.http.patch('http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities/526/?access_token=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c', data, new RequestOptions({headers: header}))
    .map((response: Response) => response.json());
  }
}
