import {Component} from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: []
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Pelao';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18n Plural
  public clients: string[] = ['Roberto', 'Iris', 'Yuri', 'Leslie', 'Gabriel', 'Omar', 'Enelis', 'Taré', 'Chicho'];

  public clientsMap = {
    '=0': 'Ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient(): void {
    this.clients.pop()
  }

  // keyValue Pipe
  public person = {
    name: 'Omar',
    age: 24,
    address: 'Ottawa, Canada',
    rango: 'Quinto Superior'
  }

  //Async Pipe

}
