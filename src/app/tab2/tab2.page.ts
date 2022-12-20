import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor() {}

  donateFood() {
    this.openURL(
      'https://www.google.com/maps/search/?api=1&query=Ponto+Doacao+Alimento'
    );
  }

  donateClothes() {
    this.openURL(
      'https://www.google.com/maps/search/?api=1&query=Ponto+Doacao+Roupas'
    );
  }

  donateBlood() {
    this.openURL(
      'https://www.google.com/maps/search/?api=1&query=Ponto+Doacao+Sangue'
    );
  }

  openURL(url: string) {
    window.open(url, '_blank').focus();
  }
}
