import { Component, OnInit, Input , OnChanges, Output, EventEmitter} from '@angular/core';
import {Client } from "../../../../interface/client";


@Component({
  selector: 'client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit, OnChanges{

  @Input() public clients:  Client[] | null = null;
  @Output() selectedClient: EventEmitter<Client> = new EventEmitter<Client>()

  constructor() {}

  ngOnInit(): void {


  }

  ngOnChanges(): void {
    console.log("client de client list" , this.clients)
  }

  selectClient(client: Client){
    this.selectedClient.emit(client)
  }

}
