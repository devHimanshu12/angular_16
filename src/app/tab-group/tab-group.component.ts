import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss']
})
export class TabGroupComponent {

  @Input() tabOptions:any=[]
  links = ['First', 'Second', 'Third'];
  selectedKey:string;
  background: ThemePalette = undefined;

  ngOnInit(){
   this.selectedKey = this.tabOptions[0].key
  //  console.log('selected key',this.selectedKey)
  }

  onValueChange(event:any){
    console.log('djfdkjfd',event)
  }


  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

  addLink() {
    this.links.push(`Link ${this.links.length + 1}`);
  }

}
