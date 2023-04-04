import { Component } from '@angular/core';

@Component({
  selector: 'app-myc01-buy-count',
  templateUrl: './myc01-buy-count.component.html',
  styleUrls: ['./myc01-buy-count.component.css']
})
export class Myc01BuyCountComponent {
  count = 3;
  imgUrl = '1.jpg';

  zengJia(){
    this.count++;
  };

  jianShao(){
    if(this.count>0){
      this.count--;
    }
  };
}
