import { Component, OnInit } from '@angular/core';

// Creamos un tipo base para el ejemplo
export type Producto = {
  nombre: string,
  precio: number,
  descripcion: string
}

@Component({
  selector: 'app-lista-basica',
  templateUrl: './lista-basica.component.html',
  styleUrls: ['./lista-basica.component.scss']
})
export class ListaBasicaComponent implements OnInit {

  listaElementos: Producto[] = [
    {
      nombre: 'Leche',
      precio: 10,
      descripcion: 'Leche Entera'
    },
    {
      nombre: 'Carne',
      precio: 20,
      descripcion: 'Carne de cerdo'
    }
  ];
  cargando: boolean = true;

  opcion: number = 0;

  constructor() { }

  ngOnInit(): void {
    
  }

  cambiarCargando(){
    this.cargando = !this.cargando;
  }

  escogerOpcion(opcionEscogida: number){
    this.opcion = opcionEscogida; // El valor cambia, implica un cambio en los elementos renderizados
  }


}
