import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder,
              private contactService: ContactService) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.contactService.store(this.form.value).subscribe((resp: any) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Contacto registrado correctamente',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          this.form.reset();
        });
      });
    }
  }

}
