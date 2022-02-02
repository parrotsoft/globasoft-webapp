import { Component, OnInit } from '@angular/core';
import { icon, latLng, marker, Marker, tileLayer } from 'leaflet';
import { ITask, TaskService } from '../../services/task.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  listTasks : ITask[] = [];
  markers: Marker[] = [];

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: latLng(8.9523896, -73.0854491)
  };

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.onList();
  }

  onList() {
    this.taskService.list().subscribe((resp: any) => {
      this.listTasks = resp.data;
      this.listTasks.forEach((item: ITask) => {
        if (item.lat && item.lng) {
          this.addMarker(item);
        }
      });
    });
  }

  addMarker(task: ITask) {
    const newMarker = marker(
      [ task.lat, task.lng ],
      {
        icon: icon({
          iconSize: [ 25, 25 ],
          iconUrl: 'https://capas.com.mx/wp-content/uploads/2016/04/Map-Marker-Push-Pin-1-Right-Pink-icon.png'
        })
      }
    );

    this.markers.push(newMarker);
  }

}
