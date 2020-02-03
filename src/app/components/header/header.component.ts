import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.navbar();
  }
  navbar() {
    $(window).scroll(() => {
      if ($(document).scrollTop() > 80) {
        $('.navbar').removeClass('d-none');
      } else {
        $('.navbar').addClass('d-none');
      }
    });
  }
}
