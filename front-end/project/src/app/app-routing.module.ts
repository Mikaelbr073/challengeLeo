import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotasDetailComponent } from './notas-detail/notas-detail.component';


const routes: Routes = [
  {path: 'notas-detalhes/:titile', component: NotasDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingCoponents = [NotasDetailComponent, ]
