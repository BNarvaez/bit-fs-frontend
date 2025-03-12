import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/productos.service';

import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-medicamentos',
  imports: [CommonModule, FormsModule, CurrencyPipe],
  templateUrl: './medicamentos.component.html',
  styleUrl: './medicamentos.component.css'
})
export class MedicamentosComponent implements OnInit{
  productosService = inject(ProductsService);
  http = inject(HttpClient)
  

  productos: any[] = [];
  

  nuevoProducto: any[] = [];
  productoSeleccionado: any = null;

  ngOnInit(){
    this.obtenerProductosMedicamentos();
  }

  obtenerProductosMedicamentos() {
    this.productosService.getAllProduct().subscribe((res: any)=>{
      console.log('Respuesta:', res);
      this.productos = res.data.filter((producto: any)=> producto.categoria === 'Medicamentos');
    })
  }

  
  editarProducto(producto: any) {
    this.productoSeleccionado = { ...producto }; 
    console.log("Producto seleccionado para edición:", this.productoSeleccionado);
  }

  seleccionarProducto(producto: any) {
    console.log("Producto seleccionado al intentar actualizar:", producto);
    this.productoSeleccionado = { ...producto }; 
  }
  

  
  actualizarProducto() {
    console.log("Producto a actualizar:", this.productoSeleccionado); 
    this.http.put(`http://localhost:4100/productos/${this.productoSeleccionado._id}`, this.productoSeleccionado)
      .subscribe(response => {
        console.log("Producto actualizado:", response);
      }, error => {
        console.error("Error al actualizar producto:", error);
      });
  }
  

  
  eliminarProducto(id: string) {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      this.productosService.deleteOneProduct(id).subscribe(() => {
        console.log('Producto eliminado');
        this.productos = this.productos.filter(producto => producto.id !== id);
      });
    }
  }

  
  cancelarEdicion() {
    this.productoSeleccionado = null;
  }

  

}
