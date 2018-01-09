import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-dsu',
  templateUrl: './add-dsu.component.html',
  styleUrls: ['./add-dsu.component.scss']
})
export class AddDsuComponent implements OnInit {

  title: string = "Add DSU"

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.title)
  }

}


