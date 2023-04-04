import { Pipe } from "@angular/core";

@Pipe({
    name: 'sex' //過濾器、管道名稱
})
export class SexPipe {
    //管道中執行過濾任務的是一個固定的函數
    // lang為內建參數
    transform(val: any, lang='zh'){
        if(lang=='zh'){
            if(val==1){
                return '男';
            }else if(val==0){
                return '女';
            }else{
                return '未知';
            }
        }else if(lang='en'){
            if(val==1){
                return 'Male';
            }else if(val==0){
                return 'Female';
            }else{
                return 'unknown';
            }
        }else{
            //預設
            if(val==1){
                return '男';
            }else if(val==0){
                return '女';
            }else{
                return '未知';
            }
        }

    }
}