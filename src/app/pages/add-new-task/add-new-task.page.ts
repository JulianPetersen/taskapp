import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../../services/todo.service';


@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {

  newTaskObj:any = {}
  itemName
  itemState=false;
  date = new Date();
  constructor(public modalCtlr: ModalController, public todoService:TodoService) {

  }

  ngOnInit() {
   
  }
  
  async add(){

    this.newTaskObj = ({itemName:this.itemName,itemState:this.itemState, date:`${this.date.getDate()}/${this.date.getMonth()}/${this.date.getFullYear()}`})
      let uid = `task-${ Math.random() * 100}` 
      
       if(uid){
        await this.todoService.addTask(uid,this.newTaskObj)
      }else{
         console.log("can't save empty task");
        }
     this.dismis()
    
    
  }
  
  async dismis(){
    await this.modalCtlr.dismiss(this.newTaskObj)
  }


}
