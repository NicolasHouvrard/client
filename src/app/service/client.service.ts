import { Injectable } from '@angular/core';
import { Client} from '../interface/client';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { BehaviorSubject, Observable, tap, map, catchError,  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clients$: BehaviorSubject<Client[] | null >= new BehaviorSubject<Client[] | null>([]);

  constructor(private http: HttpClient) {
    this.liste();

   }

  public liste(): Observable<Client[] | null> {
    return this.http
      .get<Client[] | null>('https://localhost:8000/api/clients', {
        headers: new HttpHeaders({
          'Accept':  'application/ld+json'
        })
      })
      .pipe(
        tap((res: any) => {
        console.log(res);
        let  totalItems = res['hydra:totalItems']
        let   members =  res['hydra:member']

        this.clients$.next(members)

        })
      )

  }
  public add(client: Client): Observable<any> {
    const headers = { 'content-type': 'application/ld+json'}
    const body=JSON.stringify(client);

    console.log("body", body)

    return this.http.post('https://localhost:8000/api/clients',
                          body,
                          {'headers':headers} )

  }
}
