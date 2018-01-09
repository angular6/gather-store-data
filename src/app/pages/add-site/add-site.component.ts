import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.scss']
})
export class AddSiteComponent implements OnInit {

  title: string = "Add Site"


  constructor(
  	private titleService: Title
  	) {}

  ngOnInit() {
    this.titleService.setTitle(this.title)
  }

}
