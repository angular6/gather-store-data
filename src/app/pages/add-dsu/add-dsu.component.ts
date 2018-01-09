import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-dsu',
  templateUrl: './add-dsu.component.html',
  styleUrls: ['./add-dsu.component.scss']
})
export class AddDsuComponent implements OnInit {

  title: string = "Add DSU"
  label1: string = "label1"
  label2: string = "label2"
  label3: string = "label3"


  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.title)
  }



}
