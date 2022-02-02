import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CONSTANTS } from '../app.constants';

export interface IContact {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  store(data: IContact) {
    return this.http.post(`${environment.server_api}${CONSTANTS.CONTACTS}`, data);
  }

  list() {
    return this.http.get<IContact[]>(`${environment.server_api}${CONSTANTS.CONTACTS}`);
  }

  update(id: number, data: IContact) {
    return this.http.put(`${environment.server_api}${CONSTANTS.CONTACTS}/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${environment.server_api}${CONSTANTS.CONTACTS}/${id}`);
  }
}
