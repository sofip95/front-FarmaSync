import { Component } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  productos = [
    { nombre: 'Paracetamol 500mg', precio: 5000, descripcion: 'Alivia dolor y fiebre.' },
    { nombre: 'Ibuprofeno 400mg', precio: 6500, descripcion: 'Reduce inflamación y dolor.' }
  ];

  agregarCarrito(item: any) {
    alert(item.nombre + ' agregado al carrito!');
  }
}
