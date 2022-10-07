import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeaderService{

  isVisibleMenu: boolean = false;


  getIsVisibleMenu(): Observable<boolean>{
    console.log('1', this.isVisibleMenu);

    return of(this.isVisibleMenu);
  }

  toggleIsvisibleMenu(): void{
    console.log('2', this.isVisibleMenu);

    if(this.isVisibleMenu){
      this.isVisibleMenu = false;
    }else{
      this.isVisibleMenu = true;
    }
  }
}
