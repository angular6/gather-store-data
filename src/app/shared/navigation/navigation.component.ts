import { Component, OnInit } from '@angular/core';
import { Router, ActivationStart} from '@angular/router'
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  headerTitle: string = "Sample"
  routerLink: string

  buttons: any = [
    { id: 0, title: "Welcome", routerLink: "" },
    { id: 1, title: "Add DSU", routerLink: "add-dsu" },
    { id: 2, title: "Add Site", routerLink: "add-site" }
  ]

  highlightThisButton() {
    for (let i = 0; i < this.buttons.length; i++) {
      if (this.buttons[i].routerLink == this.routerLink) {
        return this.buttons[i].id
      }
    }
  }

  constructor(
    private router: Router,
    private title: Title
  ) {

    this.router.events.subscribe((x) => {
      if (x instanceof ActivationStart) {
        window.scrollTo(0, 0)
        this.routerLink = x.snapshot.routeConfig.path
        this.title.setTitle(x.snapshot.data.title)
      }
    })
  }

  ngOnInit() {

  }

}
