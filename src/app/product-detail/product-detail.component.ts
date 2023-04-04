import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
    // 綁定數據讓前台拿到
    productId:any=null;
    //聲明依賴:讀取參數lid需要"當前的路由"服務對象
    constructor(private route: ActivatedRoute){

    }
  
    ngOnInit(){
      //根據初始化，並且lid參數商品傳進來，我們立即發送異步請求
      this.route.params.subscribe((data)=>{
        console.log('得到路由參數');
        console.log(data);
        this.productId = data['lid'];
      })
    }
}
