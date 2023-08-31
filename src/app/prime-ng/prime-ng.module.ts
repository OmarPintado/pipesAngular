import { NgModule } from '@angular/core';

import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {CardModule} from "primeng/card";
import {FieldsetModule} from "primeng/fieldset";
import {MenubarModule} from 'primeng/menubar';
import {PanelModule} from "primeng/panel";
import {ToolbarModule } from 'primeng/toolbar';


@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    PanelModule,
    TableModule,
    ToolbarModule,
  ]
})
export class PrimeNgModule { }
