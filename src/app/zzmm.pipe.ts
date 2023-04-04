import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zzmm'
})
export class ZzmmPipe {
  
  transform(val: any, format='short') {
    if(format=='short'){
      if(val==10){
        return '黨員';
      }else if(val==20){
        return '團員';
      }else{
        return '群眾'
      }
    }else if(format=='long'){
      if(val==10){
        return '中國共廠黨黨員';
      }else if(val==20){
        return '中國青團團員';
      }else{
        return '中國人民群眾'
      }
    }else{
      return '請輸入正確代號'
    }
  }

}
