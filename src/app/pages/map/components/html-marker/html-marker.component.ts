import { Component, Input, OnInit } from '@angular/core';
import { ITask } from '../../../../services/task.service';

@Component({
  selector: 'app-html-marker',
  templateUrl: './html-marker.component.html',
  styleUrls: ['./html-marker.component.scss']
})
export class HtmlMarkerComponent implements OnInit {

  @Input() data!: ITask;

  constructor() { }

  ngOnInit(): void {
  }

}
