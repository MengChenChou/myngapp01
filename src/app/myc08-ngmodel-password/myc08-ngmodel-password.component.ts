import { Component } from '@angular/core';

@Component({
  selector: 'app-myc08-ngmodel-password',
  templateUrl: './myc08-ngmodel-password.component.html',
  styleUrls: ['./myc08-ngmodel-password.component.css']
})
export class Myc08NgmodelPasswordComponent {
  upwd = '';
  msg = '密碼長度6-12';
  doUpwdChange(){
    console.log(this.upwd);
    if(this.upwd.length<6){
      this.msg='密碼太短';
    }else if(this.upwd.length>12){
      this.msg='密碼太長';
    }else{
      this.msg = '密碼長度合法'
    }
  }
}
