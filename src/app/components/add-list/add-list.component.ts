import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ListasService } from '../../services/listas.service';


@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss'],
})
export class AddListComponent implements OnInit {
  newItemList;
  newListObj
  tituloLista;
  form:any = [];
  constructor(public modalCtlr: ModalController, public lista:ListasService ) { }

  ngOnInit() { 
    
  }

  async dismis(){
    await this.modalCtlr.dismiss()
  }

  addiItemList(){
   if(this.validateData()){
    let Item = {
      val: this.newItemList,
      isChecked:false
    }
    this.form.push(Item)
    this.newItemList = "";
   }
       
  }

  add(){
    this.newListObj = ({title: this.tituloLista,lista: this.form})
    console.log(this.newListObj);
    let uid = `lista-${ Math.random() * 100}` 
    
    if(uid){
       this.lista.addList(uid,this.newListObj)
    }else{
      console.log("can't save empty task");
    }

    this.dismis()
  }
  


  validateData(){
    if(this.newItemList == ""){
      alert('debe ingresar al menos el nombre de 1 item')
      return false;
    }else{
      return true;
    }
  }

}
