import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask, TaskService } from '../../../../services/task.service';

@Component({
  selector: 'app-item-tasks',
  templateUrl: './item-tasks.component.html',
  styleUrls: ['./item-tasks.component.scss']
})
export class ItemTasksComponent implements OnInit {

  @Input() data! : ITask;
  @Output() onReload = new EventEmitter<any>();

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  onDelete() {
    this.taskService.delete(this.data.id).subscribe((resp: any) => {
      this.onReload.emit();
    });
  }

  onComplete() {
    this.data.completed = true;
    this.taskService.update(this.data.id, this.data).subscribe((resp: any) => {
      this.onReload.emit();
    });
  }

  get idCompleted() {
    return this.data.completed;
  }
}
