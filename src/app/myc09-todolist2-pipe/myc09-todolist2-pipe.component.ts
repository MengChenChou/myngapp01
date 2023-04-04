import { Component } from '@angular/core';

@Component({
  selector: 'app-myc09-todolist2-pipe',
  templateUrl: './myc09-todolist2-pipe.component.html',
  styleUrls: ['./myc09-todolist2-pipe.component.css']
})
export class Myc09Todolist2PipeComponent {
  empList=[
    {eid:101, ename:'亮亮', salary:5000, birthday:0, sex:1, zzmm:10},
    {eid:102, ename:'然然', salary:6000, birthday:0, sex:0, zzmm:20}
  ];

  doDelete(index: any){
    this.empList.splice(index, 1);
  }
}
