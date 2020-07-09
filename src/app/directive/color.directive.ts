import { Directive, HostListener, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

 
  constructor(private el: ElementRef,
    // private counterSVC: ContService
    ) { }

  @HostListener('click')onClick(){
    console.log("this el for click "+ this.el);
   this.el.nativeElement.style.backgroundColor = 'Coral';
  //  this.counterSVC.clickimCounter++;
  }

 
  @HostBinding('style.backgroundColor') color = "DarkGrey"; 
  @HostListener('mouseenter') onMouseEnter(){
    this.color= this.color === 'Violet' ? 'yellow' : 'Violet';
    // this.counterSVC.hoverCounter++
  }



  @HostListener('dblclick')ondblClic(){
    console.log("this el for click "+ this.el);
   this.el.nativeElement.style.backgroundColor = 'red';
  //  this.counterSVC.dblclickCounter++
  }

}


