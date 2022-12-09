import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IContacto } from 'src/app/models/contacto.interface';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})
export class ListaContactosComponent implements OnInit, OnDestroy {

  // Creamos una lista de contactos
  listaContactos: IContacto[] = [];
  contactoSeleccionado: IContacto | undefined;

  // Subscripción de Servicio
  subscription: Subscription | undefined;

  //! Para hacer uso de un servicio se debe inyectar en el constructor
  // Inyectamos en el constructor el servicio de contactos
  constructor(private contactoService: ContactoService) { }

  ngOnInit(): void {
    // Obteenr la lista de contactos que nos brinda el servicio
    this.contactoService.obtenerContactos()
      .then((lista: IContacto[]) => this.listaContactos = lista)
      .catch((error) => console.log(`Ha habido un error al recuperar la lista de contactos: ${error}`))
      .finally(() => console.log('Petición de lista de contactos terminada'));
  }

  obtenerContacto(id: number) {
    //console.log(`Obtener info del contacto: ${id}`);
    this.subscription = this.contactoService.obtenerContactoPorID(id)?.subscribe(
      (contacto: IContacto) => this.contactoSeleccionado = contacto)
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();    
  }  

}
