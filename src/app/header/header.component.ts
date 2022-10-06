import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isVisibleMenu!: boolean;

  constructor(private headerSercive: HeaderService) {}

  ngOnInit(): void {
    this.isVisibleMenu =this.headerSercive.getIsVisibleMenu();
  }

  onVisibleMenu(): void {
    this.headerSercive.toggleIsvisibleMenu();
    // todo a corriger la ligne précédente change le service, mais rien n'ets dynamique, alors la ligne suivante permette de changer dans le component pour un semblant de dynamisme => manque une observable ?
    this.isVisibleMenu = !this.isVisibleMenu;
  }

}
