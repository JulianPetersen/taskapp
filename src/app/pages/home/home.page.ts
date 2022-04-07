import { Component, ViewChild } from '@angular/core';
import { AlertController, IonSegment, ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';
import { TodoService } from '../../services/todo.service';
import { UpdateTaskPage } from '../update-task/update-task.page';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  todoList = []
  today: number = Date.now();
  updatedState;
  date = new Date();

  constructor(public modalCtlr: ModalController, 
              public todoService:TodoService,
              private storage: Storage) { 
    
    this.getAllTask()
  }

  ngOnInit(){
   
  }

  async addNewItem() {
    const modal = await this.modalCtlr.create({
      component: AddNewTaskPage,
    })
    modal.onDidDismiss().then(newTask =>{
      this.getAllTask()
    })
    return await modal.present()
  }

  getAllTask(){
    this.todoList = this.todoService.getAllTasks()
    console.log(this.todoService.getAllTasks());
  }

  delete(key) { 
    this.todoService.deleteTask(key)
    this.getAllTask()
  }

  async update(selectedTask){
    const modal = await this.modalCtlr.create({
      component: UpdateTaskPage,
      componentProps: {task: selectedTask}
    })

    modal.onDidDismiss().then(()=>{
      this.getAllTask()
    })
    
    return await modal.present()
  }

  marcarRealizada(key){
    this.storage.get(key).then((data) => {
      this.updatedState = ({itemName:data.itemName,itemState:true,date:`${this.date.getDate()}/${this.date.getMonth()}/${this.date.getFullYear()}`})
      let uid = key
      this.todoService.updateTask(uid,this.updatedState)
      setTimeout(() => {
        this.getAllTask();
      }, 200);
    })
    
  }

 }
 


