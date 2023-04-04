import { Component } from '@angular/core';
import { LogService } from '../log.service';


@Component({
  selector: 'app-myc10',
  templateUrl: './myc10.component.html',
  styleUrls: ['./myc10.component.css']
})
export class Myc10Component {
  // 聲明依賴注入
  log:any = null;
  constructor(log: LogService){
    this.log = log;
  };

  doAdd(){
    console.log("正在添加");
    let action = '添加商品:xxxx';
    // new LogService().doLog(action);
    this.log.doLog(action);
  }
  doDelete(){
    console.log("正在刪除");
    let action = '刪除商品:xxxx';
    // new LogService().doLog(action);
    this.log.doLog(action);
  }
}
