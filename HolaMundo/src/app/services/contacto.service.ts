import { Injectable } from '@angular/core';

// Importamos la lista de contactos MOCK
import { CONTACTOS } from '../mocks/contactos.mock';
import { IContacto } from '../models/contacto.interface';

// Importamos Observable de rxjs
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() { }

  obtenerContactos(): Promise<IContacto[]> {
    return Promise.resolve(CONTACTOS);
  }

  obtenerContactoPorID(id: number): Observable<IContacto> | undefined {
    
    // Buscamos el contacto por ID dentro de la lista de contactos MOCKEADOS
    const contacto = CONTACTOS.find((contacto: IContacto) => contacto.id === id );

    // Creamos un Observable
    let observable: Observable<IContacto> = new Observable(observer => {
      observer.next(contacto); // emitir un valor a todo componente suscrito
      observer.complete(); // No emitimos valores
    })

    if(contacto) {
      return observable;
    }else {
      return;
    }

  }
}
