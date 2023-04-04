import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-myc14-parent-blog',
  templateUrl: './myc14-parent-blog.component.html',
  styleUrls: ['./myc14-parent-blog.component.css']
})
export class Myc14ParentBlogComponent {
  userName = '蒼茫大地001';
  //處理子組件的"cryEvent"
  doCry( e:any ){
    console.log(e); //自訂義事件發射的數據
    this.userName = e;
  }

  @ViewChild('c0', {static: true})
  c0:any;
  @ViewChild('c1', {static: true})
  c1:any;
  @ViewChild('c2', {static: true})
  c2:any;
  // 輸出父組件內部的有識別符的子組件
  print(){
    console.log(this.c0);
    console.log(this.c1);
    console.log(this.c2);
  }
}
