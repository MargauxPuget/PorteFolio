import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Menu } from "../models/menu.model";

@Injectable({
  providedIn: 'root'
})

export class MenuService {

  menu: Menu =
  {
    isVisible : false
  };

  getMenuIsVisible(): Menu {
    return this.menu;
  }

  setMenuIsVisible(bool: boolean): Menu{
    const response = this.menu = {
      isVisible : bool
    };
    console.log('lala', this.menu);

    return response;
  }

}
