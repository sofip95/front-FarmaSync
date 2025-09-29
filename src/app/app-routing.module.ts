import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'cliente', component: ClienteComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: '/cliente', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
