import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { AddListComponent } from './add-list/add-list.component';



@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    AddListComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule

  ],
  exports:[
    MenuComponent,
    HeaderComponent,
    AddListComponent
  ]
})
export class ComponentModule { }
