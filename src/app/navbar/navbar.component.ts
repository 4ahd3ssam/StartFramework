import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  links: string[] = ["about", "portfolio", "contact"];
  isShrinked: boolean = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 10) {
      this.isShrinked = true;
    } else {
      this.isShrinked = false;
    }
  }
}
