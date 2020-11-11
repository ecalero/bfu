import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './view/inicio/inicio.component';

import { ConoceCajerosBuqueComponent } from './view/noticias/2020/octubre/conoce-cajeros-buque/conoce-cajeros-buque.component';
import { HoyComenzoFase1BfuComponent } from './view/noticias/2020/octubre/hoy-comenzo-fase1-bfu/hoy-comenzo-fase1-bfu.component';
import { IniciaPagoSegundoBonoUniversalFase1DepositoCuentaComponent } from './view/noticias/2020/octubre/inicia-pago-segundo-bono-universal-fase1-deposito-cuenta/inicia-pago-segundo-bono-universal-fase1-deposito-cuenta.component';
import { InicioPagoBonoFamiliarUniversalComponent } from './view/noticias/2020/octubre/inicio-pago-bono-familiar-universal/inicio-pago-bono-familiar-universal.component';
import { CusquenosPrefierencajerosAgentesComponent } from './view/noticias/2020/setiembre/cusquenos-prefierencajeros-agentes/cusquenos-prefierencajeros-agentes.component';

import { NoticiaPruebaComponent } from './view/noticias/2020/noviembre/noticia-prueba/noticia-prueba.component';

import { NoticiasComponent } from './view/noticias/noticias.component';
const routes: Routes = [
  { path: '', component: InicioComponent },
  {
    path: 'noticias',
    children: [
      {
        path: 'cusquenios-prefieren-cajeros-agentes', // child route path
        component: CusquenosPrefierencajerosAgentesComponent, // child route component that the router renders
      },
      {
        path: 'conoce-cajeros-buque', // child route path
        component: ConoceCajerosBuqueComponent, // child route component that the router renders
      },
      {
        path: 'inicia-pago-segundo-bono-universal-fase1-deposito-cuenta', // child route path
        component: IniciaPagoSegundoBonoUniversalFase1DepositoCuentaComponent, // child route component that the router renders
      },
      {
        path: 'hoy-comenzo-fase1-bfu', // child route path
        component: HoyComenzoFase1BfuComponent, // child route component that the router renders
      },
      {
        path: 'inicio-pago-bono-familiar-universal', // child route path
        component: InicioPagoBonoFamiliarUniversalComponent, // child route component that the router renders
      },
      {
        path: 'noticia-prueba-2020', // child route path
        component: NoticiaPruebaComponent, // child route component that the router renders
      }
      
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
