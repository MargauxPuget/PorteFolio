import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class HeaderService{

  isVisibleMenu: boolean = false;


  getIsVisibleMenu(): boolean {
    return this.isVisibleMenu;
  }
}
