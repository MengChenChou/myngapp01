import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-myc11-ajax-http-client',
  templateUrl: './myc11-ajax-http-client.component.html',
  styleUrls: ['./myc11-ajax-http-client.component.css']
})
export class Myc11AjaxHttpClientComponent {
  http:any=null;
  //  聲明依賴
  constructor(http: HttpClient){
    this.http = http;
  }

  loadProduct(){
    // 目前失效 但可以參考語法
    // let url = 'http://www.codeboy.com/data/product/list.php?pno=1';
    let url = 'https://jsonplaceholder.typicode.com/posts';
    // let url = 'https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6';
    // 使用注入的HttpClient實例發起異步請求
    this.http.get(url).subscribe((res:any)=>{
      console.log(res);
      console.log("有發");
    })
  }

}
