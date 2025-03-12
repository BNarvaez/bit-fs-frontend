import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';

import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { BellezaComponent } from './components/pages/belleza/belleza.component';
import { MedicamentosComponent } from './components/pages/medicamentos/medicamentos.component';
import { SuplementosComponent } from './components/pages/suplementos/suplementos.component';
import { CrearProductoComponent } from './components/pages/crear-producto/crear-producto.component';



export const routes: Routes = [

    {path: 'belleza', component: BellezaComponent, title: 'Belleza'},
    {path: 'crear', component: CrearProductoComponent, title: 'Crear Producto'},
    {path: 'home', component: HomeComponent, title: 'Inicio'},
    {path: 'medicamentos', component: MedicamentosComponent, title: 'Medicamentos'},
    {path:'suplementos', component: SuplementosComponent, title: 'Suplementos'},
    {path: '**', title: 'Error 404', component: PageNotFoundComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
];
