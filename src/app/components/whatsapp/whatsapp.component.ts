import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $;

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.css']
})
export class WhatsAppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  initWhatsappChat() {
    const mobileDetect = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    if (mobileDetect) {
      $('#float-cta .whatsapp-msg-container').css('display', 'none');
      window.open('https://api.whatsapp.com/send?phone=52558837478', '_blank');
    } else {
      console.log('se ejecuta');
      $('#tache').toggleClass('open');
      // (<any>document.getElementById('msg')).classList.toggle('open');
      $('#float-cta .whatsapp-msg-container').toggleClass('open');
      $('#float-cta').toggleClass('open');

      $('.btn-whatsapp-send').on('click', function(event) {
        event.stopPropagation();
      });
      $('.btn-whatsapp-send').click(function() {
        const baseUrl = 'https://web.whatsapp.com/send?phone=52558837478&text=';
        const textEncode = encodeURIComponent(
          $('#float-cta .whatsapp-msg-body textarea').val()
        );
        window.open(baseUrl + textEncode, '_blank');
      });
    }
  }
}
