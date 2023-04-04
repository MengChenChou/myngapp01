import { Component } from '@angular/core';

@Component({
  selector: 'app-myc08-ngmodel',
  templateUrl: './myc08-ngmodel.component.html',
  styleUrls: ['./myc08-ngmodel.component.css']
})
export class Myc08NgmodelComponent {
  //model
  uname = 'dingding';
  uname2 = 'tom';
  //監聽事件
  doUnameChn(){
    console.log(this.uname2);
  }
}
