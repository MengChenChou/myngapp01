import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-myc16-child2-photo',
  templateUrl: './myc16-child2-photo.component.html',
  styleUrls: ['./myc16-child2-photo.component.css']
})
export class Myc16Child2PhotoComponent {
  // 普通屬性不能被父組件傳值
  // child2Name:String = '';
  
  // 輸入型屬性: 父組件可以利用這種屬性傳值進來
  @Input()
  child2Name:String = '';
}
