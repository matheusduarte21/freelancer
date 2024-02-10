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
    // Supondo que `destinoComponent` seja a variável de template do componente de destino
    const element = this.viewContainerRef.element.nativeElement.ownerDocument.querySelector('#destino');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
