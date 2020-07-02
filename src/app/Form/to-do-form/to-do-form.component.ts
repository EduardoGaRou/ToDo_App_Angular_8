import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { ToDoService } from 'src/app/Service/to-do-service.service';
import { ToDo } from './../../Interface/to-do';
import { customValidators } from './../../Utils/customValidators';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css']
})
export class ToDoFormComponent implements OnInit {

  form: FormGroup;
  //form: ToDo = new ToDo();

  constructor(
    private todoService: ToDoService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.createForm();
  }

  createForm(): FormGroup {
    return this.fb.group({
      title: '',
      task: ['', [Validators.maxLength(20), Validators.minLength(3), Validators.required]],
    });
  }

  get email() {
    return this.form.get('email') as FormControl;
  }

  get task() {
    return this.form.get('task') as FormControl;
  }

  addTask({ valid, value }:{ valid: boolean, value: string }): void {
    if(valid) {
    	const auxtodo = new ToDo(value);
      this.todoService.addTodo(auxtodo);
    	this.form.reset();
    }
  }

  getErrorMsg(ctrl: FormControl): string | null {
    for(const propertyErrorName in ctrl.errors) {
      if(ctrl.errors.hasOwnProperty(propertyErrorName)) {
        const errorlist = {
          required: 'This field is required',
          minlength: 'Need at least 3 chars',
          maxlength: 'Cannot exceed 20 chars'
        }
        return errorlist[propertyErrorName];
      }
    }
  }

}
