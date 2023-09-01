import { Component } from '@angular/core';
import { sortOptions } from '../data';

@Component({
  selector: 'app-all-list-header',
  templateUrl: './all-list-header.component.html',
  styleUrls: ['./all-list-header.component.scss']
})
export class AllListHeaderComponent {

  sortOptions:any = sortOptions;
  selectedValue = sortOptions[0].label

}
