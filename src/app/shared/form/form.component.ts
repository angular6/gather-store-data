import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';
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
  @Input() formType: string
  switchInputs: boolean
  dsus: any[]

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.addForm()
    this.formsObjectToArray()
    if (this.formType == "site") this.switchInputs = true
    this.getDsus()
  }




  submit(x) {

    if (this.formType == "dsu") {
      var sendObject = { name: x.value.input1, description: x.value.input2, cert: x.value.input3 }
      this.apiService.post(sendObject).subscribe()
    }
    if (this.formType == "site") {
      var sendObject2 = { name: x.value.input1, description: x.value.input2, dsuId: x.value.input3 }
      this.apiService.post2(sendObject2).subscribe()
    }


  }



  getDsus() {
    this.apiService.get().subscribe(x => {
      let dsus = []
      Object.keys(x).map(function(objectKey, index) { dsus.push(x[objectKey]) });
      this.dsus = dsus
    })
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
        Validators.maxLength(20),
      ]),
      input3: new FormControl(null, [
        //Validators.required,
      ]),
    });

  }


}
