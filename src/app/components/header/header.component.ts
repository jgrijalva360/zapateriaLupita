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
    // this.navbar();
  }
  // navbar() {
  //   // const mobileDetect = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/.test(
  //   //   navigator.userAgent
  //   // );
  //   $(window).scroll(() => {
  //     if ($(document).scrollTop() > 80) {
  //       $('.navbar').addClass('bg-dark');
  //     } else {
  //       $('.navbar').removeClass('bg-dark');
  //     }
  //   });
  // }
  // menu() {
  //   if ($('.bg-dark').length) {
  //     if ($(document).scrollTop() < 80) {
  //       $('.navbar').removeClass('bg-dark');
  //     }
  //   } else {
  //     $('.navbar').addClass('bg-dark');
  //   }
  // }
}
