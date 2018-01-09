import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() title: string
  formsObject: any = {}
  formsArray: any = []
  lastid: number = 0

  @Input() label1: string
  @Input() label2: string
  @Input() label3: string

  constructor() {}

  ngOnInit() {
    this.addForm()
    this.formsObjectToArray()
  }

  submit(x) {
    console.log(x)
  }


  addForm() {
    this.lastid++;
    let newForm = this.createNewFormGroup()
    newForm["_id"] = this.lastid
    this.formsObject[this.lastid] = newForm
    this.formsObjectToArray()
  }

  removeThisForm(x) {
    delete this.formsObject[x]
    this.formsObjectToArray()

  }

  resetForms() {
    Object.keys(this.formsObject).forEach((x: any) => { if (x != 1) { delete this.formsObject[x] } })
    this.formsObjectToArray()
  }

  formsObjectToArray() { this.formsArray = _.values(this.formsObject) }


  createNewFormGroup() {

    return new FormGroup({
      input1: new FormControl(null, [
        Validators.required,
        Validators.maxLength(10),
      ]),
      input2: new FormControl(null, [
        Validators.required,
        Validators.maxLength(10),
      ]),
      input3: new FormControl(null, [
        Validators.required,
        Validators.maxLength(10),
      ]),
      // number: new FormControl(null, [
      //   Validators.required
      // ])
    });

  }


}
