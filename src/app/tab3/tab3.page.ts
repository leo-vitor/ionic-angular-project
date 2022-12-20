import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  constructor() {}

  whats() {
    this.openURL(
      ' https://api.whatsapp.com/send?phone=555194904309&text=Ol%C3%A1%20vim%20atraves%20do%20seu%20App%20Gostaria%20de%20receber%20doacoes'
    );
  }

  openURL(url: string) {
    window.open(url, '_blank').focus();
  }
}
