import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks:Task[]=[]
  constructor() { 
    let storedTasks= localStorage.getItem("tasks");
    if(storedTasks != null)
      this.tasks=JSON.parse(storedTasks);
    else
      this.tasks=[];
  }

  deleteTask(taslId:number){
    this.tasks.splice(taslId,1);
    this.saveToLocalStorage();
  }
  saveTask(title:string,description:string){
    this.tasks.push({
      title,
      description
    });
    this.saveToLocalStorage();
  }
  updateTask(taskId:any,task:Task){
    this.tasks[taskId]=task;
   this.saveToLocalStorage();
  }
  saveToLocalStorage(){
    localStorage.setItem("tasks",JSON.stringify(this.tasks));
  }
}
