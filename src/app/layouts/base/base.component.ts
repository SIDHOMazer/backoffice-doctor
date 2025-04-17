import { Component } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {
  isClose = false;


  toggleSidebar() {
    const body = document.getElementById('sidebar');
    if (body) {
      body.classList.toggle('close');
    }
  }
}
