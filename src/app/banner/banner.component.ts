import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Plugin } from '@egjs/ngx-flicking';
import { Fade, AutoPlay, Arrow, Pagination } from '@egjs/flicking-plugins';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss',  "../../../node_modules/@egjs/flicking-plugins/dist/pagination.css"]
})
export class BannerComponent {

  public bannerPlugin: Plugin[]=[new AutoPlay({duration:200000,direction:"NEXT",animationDuration:2000,stopOnHover:true}),new Pagination({type:'bullet'})]
  @Input() data:any;
  @Input() bannerData:any
  @Output() isNextClicked = new EventEmitter(false)
  @Input() actionBarArray:any = []



  addData(event:boolean){
    this.isNextClicked.emit(event)
  }

  handleAction(event:any){
    console.log('event',event)
  }

}
