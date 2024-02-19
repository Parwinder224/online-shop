import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild('navbarToggler') navbarToggler!: ElementRef;
  @ViewChild('navbarNav') navbarNav!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    if (this.navbarToggler && this.navbarNav) {
      const toggler = this.navbarToggler.nativeElement;
      const target = this.navbarNav.nativeElement;

      toggler.addEventListener('click', () => {
        if (target.classList.contains('show')) {
          target.classList.remove('show');
        } else {
          target.classList.add('show');
        }
      });
    }
  
  }
}
