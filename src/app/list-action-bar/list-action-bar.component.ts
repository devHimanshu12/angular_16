import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-action-bar',
  templateUrl: './list-action-bar.component.html',
  styleUrls: ['./list-action-bar.component.scss']
})
export class ListActionBarComponent {

  @Input() actionBarArray:any = [];
  @Output() selectedAction = new EventEmitter<any>()


  ngOnInit(){
    console.log('action bar',this.actionBarArray)
  }

  handleAction(event:any){
    this.selectedAction.emit(event);
  }

}
