import { Component, OnInit } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isVisibleMenu$!: Observable<boolean>;

  constructor(private headerSercive: HeaderService) {}

  ngOnInit(): void {
    this.isVisibleMenu$ = of(this.headerSercive.isVisibleMenu).pipe(
      tap(val => console.log('3', val))
    );

  }

  onVisibleMenu(): void {
    this.headerSercive.toggleIsvisibleMenu();
    // todo a corriger la ligne précédente change le service, mais rien n'ets dynamique, alors la ligne suivante permette de changer dans le component pour un semblant de dynamisme => manque une observable ?

  }

}
