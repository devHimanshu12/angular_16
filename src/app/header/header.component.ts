import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  ListSubTypes:any = [
    {
        key: 'all',
        label: 'All'
    },
    {
         key: "companies", 
         label: "Companies" 
    },
    {    
         key: "funds", 
         label: "Funds" 
    },
    {
         key: "deals", 
         label: "Deals" 
    }
]
}
