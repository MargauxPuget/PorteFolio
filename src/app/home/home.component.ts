import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Menu } from '../models/menu.model';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isVisibleMenu$!: Observable<Menu>;

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    /* this.isVisibleMenu$ = this.menuService.getMenuIsVisible();

    setTimeout(() => {
      console.log("totot", this.isVisibleMenu$.isVisible);
    }, 1000);
    setTimeout(() => {
      console.log("totot", this.isVisibleMenu$);
    }, 3000);
    setTimeout(() => {
      console.log("totot", this.isVisibleMenu$);
    }, 5000); */
  }

}
