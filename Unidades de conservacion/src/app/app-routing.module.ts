import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableUnidadesComponent } from './pages/table-unidades/table-unidades.component';

const routes: Routes = [
  {
    path: 'unidades',
    component: TableUnidadesComponent
  },
  {
    path:'**',
    redirectTo: 'unidades'
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
