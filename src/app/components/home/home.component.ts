import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/interfaces/task';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tasksList:Task[]=this._TasksService.tasks;
  constructor(private _TasksService:TasksService) { }
 
  ngOnInit(): void {
  }
  deleteTask(index:number){
    this._TasksService.deleteTask(index);
  }

}
