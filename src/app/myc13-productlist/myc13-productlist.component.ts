import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc13-productlist',
  templateUrl: './myc13-productlist.component.html',
  styleUrls: ['./myc13-productlist.component.css']
})
export class Myc13ProductlistComponent implements OnInit{
  productList: any[] = [];
  private pno = 0;
  // 依賴注入
  constructor(private http:HttpClient){
  }
  public loadMore():void{
    this.pno++;
    // let url = 'http://www.codeboy.com/data/product/list.php?pno='+this.pno; 
    let url = 'https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category='+this.pno;
    this.http.get(url).subscribe((res:any)=>{
      this.productList = res;
      console.log(res)
      console.log(this.pno)
    })
  }

  ngOnInit(): void {
    //組件初始化完成 立即請求一次
    this.loadMore();
  }

}
