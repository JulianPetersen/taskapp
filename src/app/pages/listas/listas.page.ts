import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddListComponent } from 'src/app/components/add-list/add-list.component';
import { ListasService } from 'src/app/services/listas.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.page.html',
  styleUrls: ['./listas.page.scss'],
})
export class ListasPage implements OnInit {

  constructor(public modalCtlr: ModalController, private lista:ListasService,private storage: Storage) { }
  
  listas:any = [];
  updateChecked;

  ngOnInit() {
    this.obtenerListas();
    
  }


  async addNewItem(){

    const modal = await this.modalCtlr.create({
      component: AddListComponent,
    })
    modal.onDidDismiss().then(newTask =>{
      this.obtenerListas();
    })
    return await modal.present()
  }

  obtenerListas(){
    this.listas = this.lista.getAllList();
    console.log(this.listas)
  }


  validateChekedFalse(state, key, i){
    this.storage.get(key).then((data)=> {
      let itemSelected = data.lista[i];
      let tituloLista = data.title
      if(itemSelected.isChecked == false){
        itemSelected.isChecked = true
      }
      console.log(itemSelected.isChecked)
      this.lista.updateList(key, {title: tituloLista,lista: data.lista})
    })
  }

 deleteList(key){
  this.lista.deleteList(key);
  this.obtenerListas();
}
}
