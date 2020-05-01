import { Component, OnInit } from '@angular/core';
import { MenuController } from "@ionic/angular";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title:string = "Servi Ruta";

  constructor( private menuCtrl: MenuController) { }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }

}
