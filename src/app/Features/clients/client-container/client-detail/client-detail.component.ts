import { Component , Input} from '@angular/core';
import { Client } from '../../../../interface/client';
import  {ClientService} from '../../../../service/client.service'

@Component({
  selector: 'client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent {
  @Input() client?: Client;

    constructor(private cs: ClientService) {

    }

  addClient(){
   

    this.client = {name: "maman", prenom: "papa"};

    this.cs.add(this.client).subscribe();

  }

}
