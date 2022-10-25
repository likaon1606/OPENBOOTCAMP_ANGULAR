import { Component, Input, Output, EventEmitter, OnInit,OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit, OnDestroy, OnChanges {

  @Input() nombre: string = "Anónimo"; // Podemos recibir información con el decorador @Input de una propiedad por defecto
  @Output() mensajeEMitter: EventEmitter<string> = new EventEmitter<string>();// Emitimos información hacia el padre, ahora es un string pero puede ser cualquier tipo

  myStyle: Object = {
    color: 'blue',
    fontSize: '20px',
    fontWeight: 'bold'
  }
  
  constructor() { }

  ngOnInit(): void {
    // Instrucciones previas a la renderización del componente
    console.log("ngOnInit del componente Saludo");
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Cambio: Valor anterior: ', changes['nombre'].previousValue);
    console.log('Cambio: Valor Nuevo', changes['nombre'].currentValue);
  }
  
  ngOnDestroy(): void {
    console.log('ngOnDestroy El componente va a desaparecer.');
  }

  /*
   *Ejemplo para gestionar un evento de tipo click en el DOM 
   */
  // alertaSaludo(): void{
  //   alert(`Hola, ${this.nombre}. Alerta despachada desde un click de botón`);
  // }

  /*
   *Ejemplo para gestionar un evento de tipo click en el DOM 
   */
  enviarMensajeAlPadre(): void{
    this.mensajeEMitter.emit(`Hola, ${this.nombre}. Alerta despachada desde un click de botón`);
  }
  
}

// Orden de ciclo de vida de los componentes:
// * 1. ngOnChanges
// * 2. ngOnInit
// * 3. ngAfterContentInit
// * 4. ngAfterContentChecked
// * 5. ngAfterViewInit
// * 6. ngAfterViewChecked
// * 7. ngAfterContentChecked
// * 8. ngAfterViewChecked
// * 8. ngAfterViewChecked


