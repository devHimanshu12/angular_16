import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent {

  @Input() data:any;
  @Input() label:string;
  @Output() scrollButton = new EventEmitter()
  @ViewChild('widgetsContent', { read: ElementRef }) public widgetsContent: ElementRef<any>;
  count = 1;

  // items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

  ngOnInit(){
  }
  

  addItem(){
    let newData:any = []
    for(let i = 0;i<10;i++){
      newData.push(this.count+"companies")
      this.count++
    }
    this.data = this.data.concat(...newData)
  }

  public scrollRight(): void {
    this.scrollButton.emit("right")
    this.addItem()
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft +500), behavior: 'smooth' });    
  }

  public scrollLeft(): void {
    this.scrollButton.emit("left")
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 500), behavior: 'smooth' });
  }

}
