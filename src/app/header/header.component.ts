import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../models/menu.model';
import { MenuService } from '../services/menu.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() menu! : Menu;

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menu = this.menuService.getMenuIsVisible();
  }

  onVisibleMenu(): void {
    this.menuService.setMenuIsVisible(true);
    console.log('1', this.menu);

    console.log('2', this.menu);
  }


}
