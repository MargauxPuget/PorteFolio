import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isVisibleMenu!: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isVisibleMenu = false, {updateOn: 'blur'};
  }

  onVisibleMenu(): void {
    this.isVisibleMenu = true;
  }

  onInvisibleMenu(): void {
    if(this.isVisibleMenu){

    }
  }

}
