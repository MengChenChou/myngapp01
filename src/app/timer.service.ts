import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class TimerService {
  startTime = 0;
  endTime = 0;

  constructor() {
    console.log('TimerService構造器生成物件')
  }

  start(){
    this.startTime = new Date().getTime();
  }

  end(){
    this.endTime = new Date().getTime();
  }
  spendTime(){
    console.log('耗費時間:',this.endTime-this.startTime);
  }

}
