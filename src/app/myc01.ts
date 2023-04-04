import { Component } from "@angular/core";
// 組件(Component)=模板(Template)+腳本(Script)+樣式(Style)
//裝飾器(Decorator)-用於指定class的用途
@Component({
    template: '<h2>我的自訂義組件</h2>',
    selector: 'myc01'//'myc01'、'[myTitle] or .myTitle'、
})
export class MyC01Component {

}
//myTitle自訂義屬性來使用 就是上面
//myc01自訂義標籤來使用 就是上面
/*
<div myTitle="xxx"></div>
or
<myc01></myc01>
*/