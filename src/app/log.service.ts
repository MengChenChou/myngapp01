import { Injectable } from "@angular/core";
// 所有的服務對象都可被注入
@Injectable({
    providedIn: 'root' //根模塊AppModule中註冊
})
export class LogService{
    // 執行日誌記錄功能
    doLog(action: any){
        let uname = 'admin4';
        let time = new Date().getTime();
        console.log(`用戶名: ${uname} 時間: ${time} 動作: ${action}`);
    }
}