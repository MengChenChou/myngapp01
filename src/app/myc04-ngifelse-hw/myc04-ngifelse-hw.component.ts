import { Component } from '@angular/core';

@Component({
  selector: 'app-myc04-ngifelse-hw',
  templateUrl: './myc04-ngifelse-hw.component.html',
  styleUrls: ['./myc04-ngifelse-hw.component.css']
})
export class Myc04NgifelseHWComponent {
  hasMore = true;
  loadMore(){
    this.hasMore=false;
  }
  // 特別注意backgorund-color====backgroundColor==='backgorund-color':'#383'
  testobj = {
    backgroundColor: '#383'
  };
  testobj2 = {
    'background-color': '#383'
  };
  test1(){
    this.testobj2 = {
      'background-color': '#883'
    };
  }

  myClassObj = {
    btn: true,
    'btn-danger': false,
    'btn-success': true
  }

  test2(){
    this.myClassObj = {
      btn: true,
      'btn-danger': true,
      'btn-success': false
    }
  }

}
