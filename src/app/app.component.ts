import { Component } from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesApp';
  constructor(private primengConfig: PrimeNGConfig) {}

  OnInit() {
    this.primengConfig.ripple = true;
  }

}
