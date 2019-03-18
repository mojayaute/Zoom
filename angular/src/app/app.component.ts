import { Component } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { MzSelectModule } from 'ngx-materialize';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  constructor(private httpClient: HttpClient) { }
  title = 'projectnew';
  private apiUrl = 'http://localhost:8000/data';
  responseData: string;
  data: any;
  method: string;
  timeResponse: number;

  sendData(form){
    if(form.value.method){
      let params = new HttpParams();
      params = params.append('data', form.value.data);
      let sendTime = (new Date()).getTime();
      return this.httpClient.request(form.value.method,this.apiUrl,{body: form.value.data , params : params }).subscribe(
        (res)=>{console.log(res);
        let data = JSON.stringify(res);
        this.responseData = data;
        let receiveTime = (new Date()).getTime();
        this.timeResponse = receiveTime - sendTime;
      });
    }else{
      alert('Select a method')
      return;
    }


  }
}
