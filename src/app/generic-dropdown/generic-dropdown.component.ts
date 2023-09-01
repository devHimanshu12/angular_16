import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MAT_SELECT_CONFIG } from '@angular/material/select';

@Component({
  selector: 'app-generic-dropdown',
  templateUrl: './generic-dropdown.component.html',
  styleUrls: ['./generic-dropdown.component.scss'],
  providers: [
    {
      provide: MAT_SELECT_CONFIG,
      useValue: { overlayPanelClass: 'generic-dropdown-overlay' },
    },
  ],
})
export class GenericDropdownComponent implements OnInit {
  @Input() selectedValue:any;
  @Input() options:any;
  @Output() selectionChangeValue = new EventEmitter<any>();
    

  constructor() { }

  ngOnInit(): void {
  }

  selectFuntion(option:any){
    this.selectedValue = option.label;
    this.selectionChangeValue.emit(option);
  }
}
