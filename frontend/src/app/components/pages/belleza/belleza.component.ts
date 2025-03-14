import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/productos.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-belleza',
  imports: [CommonModule, FormsModule, CurrencyPipe],
  templateUrl: './belleza.component.html',
  styleUrl: './belleza.component.css'
})
export class BellezaComponent {

  productosServices = inject(ProductsService);
  http = inject(HttpClient)
  

  productos: any[] = [];
  mostrarLista: boolean = true;

  nuevoProducto: any[] = [];
  productoSeleccionado: any = null;
  

  ngOnInit(): void {
      this.obtenerProductosBelleza();
      
  }

  obtenerProductosBelleza(){
    this.productosServices.getAllProduct().subscribe((res: any)=>{
      console.log('Respuesta: ', res);
      this.productos = res.data.filter((producto: any)=> producto.categoria === 'Belleza');
    })
  }

  editarProducto(producto: any) {
    this.productoSeleccionado = { ...producto }; 
    console.log("Producto seleccionado para edición:", this.productoSeleccionado);
    this.mostrarLista = false;
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
        this.obtenerProductosBelleza();
        this.mostrarLista = true;
        this.productoSeleccionado = null;
      }, error => {
        console.error("Error al actualizar producto:", error);
      });
  }
  

  
  eliminarProducto(id: string) {
      Swal.fire({
          title: '¿Estás seguro?',
          text: "¡No podrás revertir esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sí, eliminar',
          cancelButtonText: 'Cancelar'
      }).then((result) => {
          if (result.isConfirmed) {
              this.productosServices.deleteOneProduct(id).subscribe(() => {
                  Swal.fire(
                      'Eliminado!',
                      'El producto ha sido eliminado.',
                      'success'
                  );
                  this.productos = this.productos.filter(producto => producto.id !== id);
                  this.obtenerProductosBelleza();
              });
          }
      });
  }

  
  cancelarEdicion() {
    this.productoSeleccionado = null;
    this.mostrarLista = true;
  }


}
