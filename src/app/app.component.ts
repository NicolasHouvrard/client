import { Component,  OnInit } from '@angular/core';
import { ClientService} from "./service/client.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';

  public constructor(private cs: ClientService){
  }

  ngOnInit() {
    this.cs.liste().subscribe()
  }
}
