import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

constructor(private viewContainerRef: ViewContainerRef) {}

  scrollToLocalt(): void {
    const element = this.viewContainerRef.element.nativeElement.ownerDocument.querySelector('#destinoL');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToGaleria() {
    const element = this.viewContainerRef.element.nativeElement.ownerDocument.querySelector('#destino');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
