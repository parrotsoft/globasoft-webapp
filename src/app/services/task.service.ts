import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CONSTANTS } from '../app.constants';

export interface ITask {
  id: number;
  title: string;
  description: string;
  lat: number;
  lng: number;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  store(data: ITask) {
    return this.http.post(`${environment.server_api}${CONSTANTS.TASKS}`, data);
  }

  list() {
    return this.http.get<ITask[]>(`${environment.server_api}${CONSTANTS.TASKS}`);
  }

  update(id: number, data: ITask) {
    return this.http.put(`${environment.server_api}${CONSTANTS.TASKS}/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${environment.server_api}${CONSTANTS.TASKS}/${id}`);
  }
}
