import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-dsu',
  templateUrl: './add-dsu.component.html',
  styleUrls: ['./add-dsu.component.scss']
})
export class AddDsuComponent implements OnInit {

  formTouched: boolean

  constructor() {}

  ngOnInit() {}


  canDeactivate() {
    if (this.formTouched) {
      return window.confirm('Discard changes?');
    }
    return true;
  }


  touched(x: boolean) {
    console.log(x)
    this.formTouched = x
  }


}
