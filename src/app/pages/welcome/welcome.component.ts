import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  title: string = "Welcome"

  constructor(private titleService: Title) {
  }

  ngOnInit() {
  	this.titleService.setTitle(this.title)
  }

}




