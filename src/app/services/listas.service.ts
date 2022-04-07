import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class ListasService {

  constructor(private storage: Storage) {
    this.init()
   }

   addList(key, value){
    this.storage.set(key,value)
  }

  deleteList(key){
    this.storage.remove(key) 
  }

  updateList(key, newValue){
    this.storage.set(key, newValue)
    this.getAllList()
  }

  getAllList(){
    let list: any = []
    this.storage.forEach((key, value, index) => {
      if(value.startsWith('lista')){
        list.push({'key':value, 'value':key})
      }
    }); 
    return list
  }

  async init(){
    await this.storage.create()
  }
}
