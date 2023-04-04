import { Component } from '@angular/core';

@Component({
  selector: 'app-myc09-todolist',
  templateUrl: './myc09-todolist.component.html',
  styleUrls: ['./myc09-todolist.component.css']
})
export class Myc09TodolistComponent {
  //model數據
  todoList = ['開會','上課','培訓'];
  userInput = '';
  doDelete(index : any){
    //從數組的指定下標刪除一個元素
    this.todoList.splice(index, 1);
  }

  doAdd(){
    if(this.userInput.length>0){
      this.todoList.push(this.userInput);
      this.userInput = '';
    }
  }
}
