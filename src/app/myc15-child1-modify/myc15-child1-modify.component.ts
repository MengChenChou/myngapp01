import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-myc15-child1-modify',
  templateUrl: './myc15-child1-modify.component.html',
  styleUrls: ['./myc15-child1-modify.component.css']
})
export class Myc15Child1ModifyComponent {
  userInput:String = '';

  // 發送事件傳送數據給父組件
  @Output() //輸出型屬性，可以向父組件輸出數據
  cryEvent = new EventEmitter();
  doModify(){
    console.log(this.userInput);
    // 子組件此時想發射數據給父組件
    this.cryEvent.emit(this.userInput);
  }
}
