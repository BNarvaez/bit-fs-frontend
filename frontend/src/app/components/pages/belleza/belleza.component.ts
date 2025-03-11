import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/productos.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-belleza',
  imports: [CommonModule],
  templateUrl: './belleza.component.html',
  styleUrl: './belleza.component.css'
})
export class BellezaComponent {

  productosServices = inject(ProductsService);
  

  productos: any[] = [];
  

  ngOnInit(): void {
      this.obtenerProductosBelleza();
      
  }

  obtenerProductosBelleza(){
    this.productosServices.getAllProduct().subscribe((res: any)=>{
      console.log('Respuesta: ', res);
      this.productos = res.data.filter((producto: any)=> producto.categoria === 'belleza');
    })
  }


}
