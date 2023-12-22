import { Component, OnInit } from '@angular/core';
import { Client } from '../../../interface/client';
import { ClientService} from '../../../service/client.service';

import {  Observable  } from 'rxjs';

@Component({
  selector: 'client-container',
  templateUrl: './client-container.component.html',
  styleUrls: ['./client-container.component.scss']
})
export class ClientContainerComponent {
  public  clients$: Observable<Client[] | null> = this.cs.clients$;
  public cliented: Client | null = null;

  public constructor(private cs: ClientService) {

    console.log(" les clients ", this.clients$)
  }


  public selectClient(client: Client): void {
    console.log(client);
    this.cliented = client
  }
}
