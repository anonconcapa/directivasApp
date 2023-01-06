import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appErrorMsg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color:string = 'red';
  private _mensaje:string = 'este mensaje es requerido';
  htmlElement: ElementRef<HTMLElement>;


  @Input() set color(valor:string){
    this._color = valor;
    this.setColor();
  }
  @Input() set mensaje(valor:string){
    this._mensaje = valor;
    this.setMensaje();
  }
  @Input() set valido (valor : boolean){
    if(valor){ this.htmlElement.nativeElement.classList.add('hidden') }
    else{ this.htmlElement.nativeElement.classList.remove('hidden') }
  }
  constructor( private el: ElementRef<HTMLElement>) { 

    this.htmlElement = el;
  }
  ngOnChanges(changes: SimpleChanges): void {

    // if(changes?.['mensaje']){
      
    //       const mensaje1 = changes?.['mensaje'].currentValue;
    //       this.htmlElement.nativeElement.innerText = mensaje1;
          
    // }

    // if(changes?.['color']){

    //   const color = changes?.['color'].currentValue;
    //   this.htmlElement.nativeElement.style.color = this.color;
    // }
    // console.log(changes);
  }

  ngOnInit(): void {
    this.setestilo();
    this.setColor();
    // this.setMensaje();
  }

  setestilo():void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor():void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje():void {
    this.htmlElement.nativeElement.innerText = this._mensaje;

  }
}
