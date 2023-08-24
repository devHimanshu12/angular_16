import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Arrow } from '@egjs/flicking-plugins';
import { Plugin } from "@egjs/ngx-flicking";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss',"../../node_modules/@egjs/flicking-plugins/dist/pagination.css","../../node_modules/@egjs/flicking-plugins/dist/arrow.css"],
  encapsulation: ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public plugins: Plugin[] = [new Arrow({moveByViewportSize:true})];

  @ViewChild('verticalScroll', { read: ElementRef }) public verticalScroll: ElementRef<any>;
  data:any=[];
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  count = 1;
  lists: any = [{}]
  
  constructor(){}

  onScroll(event:any) {
    const tracker = event.target;
​
    const limit = tracker.scrollHeight - tracker.clientHeight;
​
    if (Math.ceil(event.target.scrollTop) >= limit - 550) {
      this.lists = this.lists.concat(...this.lists)      
    }
  }
  
  ngOnInit(){
    for(let i = 0;i<10;i++){
      this.data.push("company-"+this.count)
      this.count++
    }
    this.lists  = [{
      label: 'list1',
      data:this.data
    },{
      label: 'list2',
      data:this.data
    },{
      label: 'list3',
      data:this.data
    },{
      label: 'list4',
      data:this.data
    },{
      label: 'list5',
      data:this.data
    },{
      label: 'list6',
      data:this.data
    },{
      label: 'list7',
      data:this.data
    },{
      label: 'list8',
      data:this.data
    },{
      label: 'list9',
      data:this.data
    },{
      label: 'list10',
      data:this.data
    },{
      label: 'list11',
      data:this.data
    },{
      label: 'list12',
      data:this.data
    }]
  }

  addItem(){
    let newData:any = []
    for(let i = 0;i<10;i++){
      newData.push(this.count+"companies")
      this.count++
    }
    this.data = this.data.concat(...newData)
  }

  scrollDown(event:any){
    console.log("down",event)
  }

  scrollUp(event:any){
    console.log('up',event)
  }

  // public scrollRight(): void {
  //   this.addItem()
  //   this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 750), behavior: 'smooth' });    
  // }

  // public scrollLeft(): void {
  //   console.log('left');
  //   this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 750), behavior: 'smooth' });
  // }

  scroll(action:string){
    if(action == "right"){
      this.addItem()
    }
  }

  foods:any =  [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

}
