import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyC01Component } from './myc01';
import { MyC02Component } from './myc02.component';
import { MyC03Component } from './myc03/myc03.component';
import { Myc04Component } from './myc04/myc04.component';
import { Myc05Component } from './myc05/myc05.component';
import { Myc01BuyCountComponent } from './myc01-buy-count/myc01-buy-count.component';
import { Myc02NgforComponent } from './myc02-ngfor/myc02-ngfor.component';
import { Myc03NgifComponent } from './myc03-ngif/myc03-ngif.component';
import { Myc04NgifelseComponent } from './myc04-ngifelse/myc04-ngifelse.component';
import { Myc04NgifelseHWComponent } from './myc04-ngifelse-hw/myc04-ngifelse-hw.component';
import { Myc07SwitchComponent } from './myc07-switch/myc07-switch.component';
import { Myc08NgmodelComponent } from './myc08-ngmodel/myc08-ngmodel.component';
import { FormsModule } from '@angular/forms';
import { Myc08NgmodelPasswordComponent } from './myc08-ngmodel-password/myc08-ngmodel-password.component';
import { XuYaoQiangDiaoDirective } from './xu-yao-qiang-diao.directive';
import { Myc08XuYaoQiangDiaoTestComponent } from './myc08-xu-yao-qiang-diao-test/myc08-xu-yao-qiang-diao-test.component';
import { Myc09TodolistComponent } from './myc09-todolist/myc09-todolist.component';
import { Myc09Todolist2Component } from './myc09-todolist2/myc09-todolist2.component';
import { Myc09Todolist2PipeComponent } from './myc09-todolist2-pipe/myc09-todolist2-pipe.component';
import { SexPipe } from './sex.pipe';
import { ZzmmPipe } from './zzmm.pipe';
import { Myc10Component } from './myc10/myc10.component';
import {HttpClientModule} from '@angular/common/http';
import { Myc11AjaxHttpClientComponent } from './myc11-ajax-http-client/myc11-ajax-http-client.component';
import { Myc12UserComponent } from './myc12-user/myc12-user.component';
import { Myc12UserLoginComponent } from './myc12-user-login/myc12-user-login.component';
import { Myc12UserRegisterComponent } from './myc12-user-register/myc12-user-register.component';
import { Myc13ProductlistComponent } from './myc13-productlist/myc13-productlist.component';
import { Myc14ParentBlogComponent } from './myc14-parent-blog/myc14-parent-blog.component';
import { Myc15Child1ModifyComponent } from './myc15-child1-modify/myc15-child1-modify.component';
import { Myc16Child2PhotoComponent } from './myc16-child2-photo/myc16-child2-photo.component';
import { IndexComponent } from './index/index.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UserCenterComponent } from './user-center/user-center.component'
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

//聲明路由詞典--路由地址和路由組件的對應集合
type PathMatch = "full" | "prefix" | undefined;
let route = [
  // {path:'',component:IndexComponent},
  {path: '',redirectTo: 'index', pathMatch:'full' as PathMatch},
  {path:'index',component:IndexComponent},
  {path:'plist',component:ProductListComponent},
  {path:'pdetail',component:ProductDetailComponent},
  {path:'ucenter',component:UserCenterComponent},
    // 任意無註冊 404頁面 要放最後
    {path:'**', component: NotFoundComponent},
]

@NgModule({
  declarations: [  //宣告
    AppComponent,
    MyC01Component,
    MyC02Component,
    MyC03Component,
    Myc04Component,
    Myc05Component,
    Myc01BuyCountComponent,
    Myc02NgforComponent,
    Myc03NgifComponent,
    Myc04NgifelseComponent,
    Myc04NgifelseHWComponent,
    Myc07SwitchComponent,
    Myc08NgmodelComponent,
    Myc08NgmodelPasswordComponent,
    XuYaoQiangDiaoDirective,
    Myc08XuYaoQiangDiaoTestComponent,
    Myc09TodolistComponent,
    Myc09Todolist2Component,
    Myc09Todolist2PipeComponent,
    SexPipe,
    ZzmmPipe,
    Myc10Component,
    Myc11AjaxHttpClientComponent,
    Myc12UserComponent,
    Myc12UserLoginComponent,
    Myc12UserRegisterComponent,
    Myc13ProductlistComponent,
    Myc14ParentBlogComponent,
    Myc15Child1ModifyComponent,
    Myc16Child2PhotoComponent,
    IndexComponent,
    ProductListComponent,
    ProductDetailComponent,
    UserCenterComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,//瀏覽器模塊 包含CommonModule(ngif...)
    AppRoutingModule,
    FormsModule,//ngmodel---重點導入08
    HttpClientModule,
    RouterModule.forRoot(route),// 導入路由模塊，並註冊路由詞典，用於根模塊中
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
