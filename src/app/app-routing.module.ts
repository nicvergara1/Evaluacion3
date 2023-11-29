import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoValidadoGuard } from './guard/no-validado.guard';
import { ValidadoGuard } from './guard/validado.guard';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),
    canActivate: [ValidadoGuard]
  },
  {
    path: 'contacto',
    loadChildren: () => import('./contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [ValidadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'cerrarsesion',
    loadChildren: () => import('./cerrarsesion/cerrarsesion.module').then( m => m.CerrarsesionPageModule),
    canActivate: [ValidadoGuard]
  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule),
    canActivate: [ValidadoGuard]
  },
  {
    path: 'tiempo',
    loadChildren: () => import('./tiempo/tiempo.module').then( m => m.TiempoPageModule),
    canActivate:[ValidadoGuard]
  }
];

@NgModule({
  imports: [HttpClientModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
