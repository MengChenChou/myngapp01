import { Component } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-myc12-user-login',
  templateUrl: './myc12-user-login.component.html',
  styleUrls: ['./myc12-user-login.component.css'],
  providers: [TimerService]
})
export class Myc12UserLoginComponent {
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
}
