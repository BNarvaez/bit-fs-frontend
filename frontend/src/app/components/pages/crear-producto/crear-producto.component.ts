import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../../services/productos.service';
import { Productos } from '../../../interfaces/productos';

@Component({
  standalone: true,
  imports: [FormsModule],
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent {
  productoService = inject(ProductsService);

  productos: any[] = [];

  nombre: string = ''
  descripcion: string = ''
  precio: number = 0
  foto: string = ''
  cantidad: number = 0
  categoria: string = ''

  ngOnInit(): void {
    this.obtenerProductosPorCategoria(this.categoria);
  }

  

obtenerProductosPorCategoria(categoria: string) {
  this.productoService.getAllProduct().subscribe((res: any) => {
      if (Array.isArray(res.data)) {
            this.productos = res.data.filter((p: Productos) => p.categoria === categoria);
      } else {
          console.error("Error: la propiedad 'data' no es un array", res);
          this.productos = [];
      }
    });
}


  
  nuevoProducto() {
    const producto: Productos = {
      nombre: this.nombre,
      descripcion: this.descripcion,
      precio: this.precio,
      foto: this.foto,
      cantidad: this.cantidad,
      categoria: this.categoria
    };

    this.productoService.createProduct(producto).subscribe((res: any) => {
      console.log('Respuesta:', res);
      this.obtenerProductosPorCategoria(this.categoria);
      window.location.reload()
    })
  }

}
