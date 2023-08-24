import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-generic-toggle',
  templateUrl: './generic-toggle.component.html',
  styleUrls: ['./generic-toggle.component.scss']
})
export class GenericToggleComponent {

  @Input() toggleOptions:string[] = []
  @Output() toggleValue = new EventEmitter<string>()

  constructor(){

  }

  ngOnInit(){

  }

  onValueChange(value:string){
    console.log('toggle value',value)
    this.toggleValue.emit(value)
  }
}
