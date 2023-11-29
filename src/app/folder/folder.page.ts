import { Component, inject, OnInit,ViewChild,ElementRef } from '@angular/core';
import { AnimationController, MenuController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  nombreUsuario= localStorage.getItem('nombreUsuario');
  @ViewChild("titulo", { read: ElementRef, static: true }) titulo!: ElementRef;
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor(private animationCtrl: AnimationController) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.crecer();
    
  }
  public crecer() { //ANIMACIÓN PARA HACER CRECER LAS COSAS
    const animation = this.animationCtrl
      .create()
      .addElement(this.titulo.nativeElement)
      .duration(1000)
      .iterations(Infinity)
      .fromTo('transform', 'scale3d(1,1,1)', 'scale3d(2,2,2)')
      .fromTo("color", "green", "blue")
      .fromTo('opacity', '1', '0');

    animation.play();
  }
}
