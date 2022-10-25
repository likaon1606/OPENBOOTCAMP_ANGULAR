import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HolaMundo';
  usuario = '@LIKAON1606';

  /* Está función se ejecutará cuando el Hijo (Saludo Component) se pulse un botón */
  recibirMensajeDelHijo(evento: string){
    alert(evento);
  }
}
