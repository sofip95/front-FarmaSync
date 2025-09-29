import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  inventario = [
    { nombre: 'Vitamina C 1g', stock: 3, proveedor: 'Proveedor B' },
    { nombre: 'Amoxicilina 500mg', stock: 5, proveedor: 'Proveedor A' }
  ];

  reordenar(producto: any) {
    alert('Se ha solicitado reordenar: ' + producto.nombre);
  }
}
