import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  constructor(private router: Router){
  }

  // 跳轉
  jump(){
    // 跳轉到商品列表頁
    this.router.navigateByUrl('/plist');
  }
}
