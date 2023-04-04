import { Component } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-myc12-user',
  templateUrl: './myc12-user.component.html',
  styleUrls: ['./myc12-user.component.css'],
  providers: [TimerService]
})
export class Myc12UserComponent {
  timer:any = null;
  constructor(timer: TimerService){
    this.timer = timer;
  }
  doLogin(){
    this.timer.start();
    console.log('開始向服務器提交登入信息');
    console.log('伺服器返回消息，登入成功');
    this.timer.end();
    this.timer.spendTime();
  }

  doRegister(){
    this.timer.start();
    console.log('開始向服務器提交註冊信息');
    console.log('伺服器返回消息，註冊成功');
    this.timer.end();
    this.timer.spendTime();
  }
}
