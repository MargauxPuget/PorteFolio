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
    this.isVisibleMenu = true;
  }

  onInvisibleMenu(): void {
    if(this.isVisibleMenu){

    }
  }

}
