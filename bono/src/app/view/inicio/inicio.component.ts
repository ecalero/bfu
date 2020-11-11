import { Component, OnInit } from '@angular/core';
import { Inject, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { APP_BASE_HREF } from '@angular/common';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  title = 'bono';
  safeURL: any = [];
  safeURLNoticia:any = [];
  safeURLNoticia1:any = [];
  safeURLNoticia2:any = [];
  safeURLNoticia3:any = [];
  videoUrl:any=[
  {
    urlVideo: 'https://youtu.be/flCn3iVFmTI',
    urlImagen: 'assets/images/video/bono-familiar-universal-fase1.png'
  },
  {
    urlVideo: 'https://youtu.be/HMCSQgYh8xw',
    urlImagen:'assets/images/video/video-conoce-fases-bono.png'
  },
  {
    urlVideo: 'https://youtu.be/Gx0lMUTUET4',
    urlImagen:'assets/images/video/video-bono-deposito-cuenta.png'
  },
  {
    urlVideo: 'https://youtu.be/agFsfN-ZZHo',
    urlImagen: 'assets/images/video/carrito-protada.png'
  },
/*   {
    urlVideo: 'https://www.youtube.com/embed/xPptSiFtSw4',
    urlImagen: 'assets/images/video/bono2.jpg'
  }, */
  {
    urlVideo: 'https://youtu.be/pf3HiIdPi48',
    urlImagen: 'assets/images/video/noticia-cajero-buque-0610202003.jpg'
  },
  {
    urlVideo: 'https://youtu.be/j5PNuhBfLmM',
    urlImagen: 'assets/images/video/cusqueños-cajero-agente-011020203.jpg'
  }
  ];
  

  //linea comentada 
  /* codigo comentado */


  //videoUrlNoticia = "https://youtu.be/LeDeN9ECxwk";
  videoUrlNoticia = "https://youtu.be/8Rq-1wA5NzI";
  videoUrlNoticia1 = "https://youtu.be/SlJrbcvq52Q";
  videoUrlNoticia2 = "https://www.youtube.com/watch?v=vgHqslwVjHY";
  videoUrlNoticia3 = "https://www.youtube.com/watch?v=vgHqslwVjHY";


  constructor(@Inject(APP_BASE_HREF) private baseHref:string, private _sanitizer: DomSanitizer,private location: Location) { 


    /*   console.log(this.baseHref); */

    this.safeURLNoticia = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlNoticia);
    this.safeURLNoticia1 = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlNoticia1);
    this.safeURLNoticia2 = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlNoticia2);

    this.safeURLNoticia3 = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlNoticia3);
/*     console.log("-->location");
    console.log(this.location.path.name); */
  }
  ngOnInit(): void {
  }

}
