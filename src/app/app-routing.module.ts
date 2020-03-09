import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'counter',
    loadChildren: () => import('./counter/counter.module').then(m => m.CounterModule)
  },
  {
    path: 'folders',
    loadChildren: () => import('./folders/folders.module').then(m => m.FoldersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
