import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientContainerComponent } from './client-container/client-container.component';
import { ClientListComponent } from './client-container/client-list/client-list.component';
import { ClientDetailComponent } from './client-container/client-detail/client-detail.component';



@NgModule({
  declarations: [
    ClientContainerComponent,
    ClientListComponent,
    ClientDetailComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    ClientContainerComponent
    
  ]
})
export class ClientsModule { }
