import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class HeaderService{

  isVisibleMenu: boolean = false;


  getIsVisibleMenu(): boolean {
    return this.isVisibleMenu;
  }

  toggleIsvisibleMenu(): void{

    if(this.isVisibleMenu){
      this.isVisibleMenu = false;
    }else{
      this.isVisibleMenu = true;
    }
  }
}
