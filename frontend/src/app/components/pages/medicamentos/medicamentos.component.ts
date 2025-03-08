import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/productos.service';

@Component({
  selector: 'app-medicamentos',
  imports: [],
  templateUrl: './medicamentos.component.html',
  styleUrl: './medicamentos.component.css'
})
export class MedicamentosComponent implements OnInit{
  productosService = inject(ProductsService);

  productos: any[] = [];

  ngOnInit(){
    this.obtenerProductosMedicamentos();
  }

  obtenerProductosMedicamentos() {
    this.productosService.getAllProduct().subscribe((res: any)=>{
      console.log('Respuesta:', res);
      this.productos = res.data.filter((producto: any)=> producto.categoria === 'medicamentos');
    })
  }




}
