import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITask, TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  form!: FormGroup;
  listTasks : ITask[] = [];

  constructor(private fb: FormBuilder,
              private taskService: TaskService) {
    this.initForm();
  }

  ngOnInit(): void {
    this.onList();
  }

  initForm() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      lat: [''],
      lng: ['']
    });
  }

  getGeolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((location) => {
        this.form.patchValue({
          lat: location.coords.latitude,
          lng: location.coords.longitude
        });
      });
    }
  }

  onList() {
    this.taskService.list().subscribe((resp: any) => {
      this.form.reset();
      this.getGeolocation();
      this.listTasks = resp.data;
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.taskService.store(this.form.value).subscribe((resp: any) => {
        this.onList();
      });
    }
  }



}
