import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/productos.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-suplementos',
  imports: [CommonModule],
  templateUrl: './suplementos.component.html',
  styleUrl: './suplementos.component.css'
})
export class SuplementosComponent{

  productosServices = inject(ProductsService);
 

  productos: any[] = [];


  ngOnInit(): void {
      this.obtenerProductosSuplementos();
      
  }


  obtenerProductosSuplementos() {
    this.productosServices.getAllProduct().subscribe((res: any)=>{
      console.log('Respuesta:', res);
      this.productos = res.data.filter((producto: any)=> producto.categoria === 'suplementos')
    })
  }

  





}
