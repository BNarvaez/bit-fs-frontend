import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { BellezaComponent } from './components/pages/belleza/belleza.component';
import { MedicamentosComponent } from './components/pages/medicamentos/medicamentos.component';
import { SuplementosComponent } from './components/pages/suplementos/suplementos.component';


export const routes: Routes = [

    {path: 'belleza', component: BellezaComponent, title: 'Belleza'},
    {path: 'home', component: HomeComponent, title: 'Inicio'},
    {path: 'inicio_sesion', component: LoginComponent, title: 'Inicio de Sesion'},
    {path: 'medicamentos', component: MedicamentosComponent, title: 'Medicamentos'},
    {path: 'PageNotFound', title: 'Error 404', component: PageNotFoundComponent},
    {path:'suplementos', component: SuplementosComponent, title: 'Suplementos'},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    
];
