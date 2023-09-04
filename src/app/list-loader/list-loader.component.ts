import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-loader',
  templateUrl: './list-loader.component.html',
  styleUrls: ['./list-loader.component.scss']
})
export class ListLoaderComponent {

    @Input() items!:number;
    cards:Array<number>= new Array()

    ngOnInit(){
      console.log('items',this.cards,this.items)
      this.cards.length = this.items
    }
}
