import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './view/inicio/inicio.component';
import {APP_BASE_HREF} from '@angular/common';
import { FacebookModule } from 'ngx-facebook';
import { NoticiasComponent } from './view/noticias/noticias.component';
import { CusquenosPrefierencajerosAgentesComponent } from './view/noticias/2020/setiembre/cusquenos-prefierencajeros-agentes/cusquenos-prefierencajeros-agentes.component';
import { CabeceraComponent } from './view/plantilla/cabecera/cabecera.component';
import { PieComponent } from './view/plantilla/pie/pie.component';
import { LadoDerechoComponent } from './view/plantilla/lado-derecho/lado-derecho.component';

import { NgxTweetModule } from "ngx-tweet";

// Import ngx-twitter-timeline
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { NgxSocialShareModule } from 'ngx-social-share';
import { ConoceCajerosBuqueComponent } from './view/noticias/2020/octubre/conoce-cajeros-buque/conoce-cajeros-buque.component';
import { IniciaPagoSegundoBonoUniversalFase1DepositoCuentaComponent } from './view/noticias/2020/octubre/inicia-pago-segundo-bono-universal-fase1-deposito-cuenta/inicia-pago-segundo-bono-universal-fase1-deposito-cuenta.component';
import { HoyComenzoFase1BfuComponent } from './view/noticias/2020/octubre/hoy-comenzo-fase1-bfu/hoy-comenzo-fase1-bfu.component';
import { InicioPagoBonoFamiliarUniversalComponent } from './view/noticias/2020/octubre/inicio-pago-bono-familiar-universal/inicio-pago-bono-familiar-universal.component';
import { NoticiaPruebaComponent } from './view/noticias/2020/noviembre/noticia-prueba/noticia-prueba.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NoticiasComponent,
    CusquenosPrefierencajerosAgentesComponent,
    CabeceraComponent,
    PieComponent,
    LadoDerechoComponent,
    ConoceCajerosBuqueComponent,
    IniciaPagoSegundoBonoUniversalFase1DepositoCuentaComponent,
    HoyComenzoFase1BfuComponent,
    InicioPagoBonoFamiliarUniversalComponent,
    NoticiaPruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FacebookModule.forRoot(),
    NgxTweetModule,
    NgxTwitterTimelineModule,
    NgxSocialShareModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/bfu/'}],
  //providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
