import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { Arrow } from '@egjs/flicking-plugins';
import { Plugin } from '@egjs/ngx-flicking';
import disableDevtool from 'disable-devtool'


// we can pass options to modify devTools disbale tool, otherwise it disables devTools by key board shortcuts and right click and etc
// let options = {
//   disableMenu: false, // default value is true
// }
// disableDevtool();

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss',"../../../node_modules/@egjs/flicking-plugins/dist/arrow.css"]
})
export class ListComponent {
  public plugins: Plugin[] = [new Arrow({moveByViewportSize:true})];
  @Input() data:any;
  @Output() isNextClicked = new EventEmitter<boolean>();

  constructor(private cd: ChangeDetectorRef){

  }

  ngOnInit(){
  }

  addItems(){
    this.isNextClicked.emit(true)
  }

  onRenderPanelChange(event:any){
    console.log('render panel change',event)
  }

  // drag(event:any,eventType:string){
  //   console.log('drag event',eventType,event)
  //   if(event.direction == "NEXT" && event.eventType == "holdStart"){
  //     this.isNextClicked.emit(true)
  //   }
  // }


}
