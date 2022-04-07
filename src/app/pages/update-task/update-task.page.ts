import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.page.html',
  styleUrls: ['./update-task.page.scss'],
})
export class UpdateTaskPage implements OnInit {

  @Input() task;

  newTaskObj = {}
  itemName
  date = new Date();

  constructor(public modalCtlr:ModalController, public todoServive:TodoService) { }

  ngOnInit() {

    this.itemName = this.task.value.itemName
  }
  

  async dismis(){
    await this.modalCtlr.dismiss()
  }

  async update(){
    this.newTaskObj = ({itemName:this.itemName,itemState:false,date:`${this.date.getDate()}/${this.date.getMonth()}/${this.date.getFullYear()}`})
    let uid = this.task.key
    await this.todoServive.updateTask(uid,this.newTaskObj)
    this.dismis()
  }

}
