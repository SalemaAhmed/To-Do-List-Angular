import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/interfaces/task';
import { TasksService } from 'src/app/services/tasks.service';


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  taskId:any;
  task!:Task;
  constructor(private _ActivatedRoute:ActivatedRoute ,private _TasksService:TasksService, private _Router:Router) { }

  ngOnInit(): void {
    this.taskId=this._ActivatedRoute.snapshot.paramMap.get("id");
    this.task=this._TasksService.tasks[this.taskId];
  }
  updateTask(){
    this._TasksService.updateTask(this.taskId,this.task);
    this._Router.navigate(['/']);
  }
  deleteTask(){
    this._TasksService.deleteTask(this.taskId);
    this._Router.navigate(['/']);
  }

}
