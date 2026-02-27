import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(
    public menu: MenuService,
    private router: Router
  ) {}

  get isMenuPage(): boolean {
    return this.router.url.includes('/menu');
  }
}
