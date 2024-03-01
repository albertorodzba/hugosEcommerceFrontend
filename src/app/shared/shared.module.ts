import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TableComponent } from './table/table.component';
import { MessageComponent } from './message/message.component';



@NgModule({
  declarations: [
    SearchBarComponent,
    TableComponent,
    MessageComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SearchBarComponent,
    TableComponent,
  ]
})
export class SharedModule { }
