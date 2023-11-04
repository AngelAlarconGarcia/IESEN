import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'pages',
    loadChildren : ()=>  import('./pages/pages.module').then(m=> m.pagesModule)
  },

  {path: '**', redirectTo: 'pages'},
  {
    path: '', redirectTo: 'pages', pathMatch: 'full'
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
