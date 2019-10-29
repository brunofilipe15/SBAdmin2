import { Component, OnInit } from '@angular/core';
import { environment } from  './../environments/environment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  hidden: boolean;
  constructor() {
    this.hidden = environment.hidden;
  }

  ngOnInit() {
  }

}
