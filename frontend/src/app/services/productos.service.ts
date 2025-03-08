import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Productos} from '../interfaces/productos'; 

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() {}

  HttpClient = inject(HttpClient)

  createProduct(product: Productos): Observable<Productos> {
    console.log('Products:', product);
    return this.HttpClient.post<Productos>('http://localhost:4100/productos', product);
  }

  getAllProduct(): Observable<Productos[]> {
    return this.HttpClient.get<Productos[]>('http://localhost:4100/productos');
  }

  getOneProduct(id: string): Observable<Productos> {
    return this.HttpClient.get<Productos>(`http://localhost:4100/productos/${id}`);
  }

  updateProduct(id: string, product: Productos): Observable<Productos> {
    return this.HttpClient.put<Productos>(`http://localhost:4100/productos/${id}`, product);
  }

  deleteOneProduct(id: string): Observable<void> {
    return this.HttpClient.delete<void>(`http://localhost:4100/productos/${id}`);
  }
}
