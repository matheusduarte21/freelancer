import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  constructor(
    private viewContainerRef: ViewContainerRef
  ){}

  scrollToComponent(): void {
    const element = this.viewContainerRef.element.nativeElement.ownerDocument.querySelector('#destino');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  goToWhatsApp(): void {
    const whatsappUrl = 'https://wa.me/5583999083985?text=Ol%C3%A1%20Guedes%2C%20tudo%20bem%3F%20Gostaria%20de%20fazer%20um%20or%C3%A7amento!';
    window.location.href = whatsappUrl;
  }
}
