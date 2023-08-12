import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PrimeNgModule} from "../prime-ng/prime-ng.module";
import {ProductsRoutingModule} from './products-routing.module';

import {BasicsPageComponent} from './pages/basics-page/basics-page.component';
import {NumberPageComponent} from './pages/number-page/number-page.component';
import {UncommonPageComponent} from './pages/uncommon-page/uncommon-page.component';

@NgModule({
  declarations: [
    BasicsPageComponent,
    NumberPageComponent,
    UncommonPageComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ProductsRoutingModule,
  ]
})
export class ProductsModule {
}
