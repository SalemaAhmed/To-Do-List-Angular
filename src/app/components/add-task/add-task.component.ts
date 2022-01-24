import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';
Title
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private _TasksService:TasksService ,private _Router:Router,private _Title:Title) { 
    this._Title.setTitle("Add Task");
  }

  ngOnInit(): void {
  }
  saveTask(title:any,description:any){
    this._TasksService.saveTask(title.value,description.value);
    this._Router.navigate(['/'])
  }
}
