import { ChangeDetectorRef, Component } from '@angular/core';
import { Plugin } from '@egjs/ngx-flicking';
import { Fade, AutoPlay, Arrow, Pagination } from '@egjs/flicking-plugins';
import { FlickingError, ERROR_CODE } from "@egjs/flicking";
import { ActionBarArray } from '../config/action-bar';


@Component({
  selector: 'app-flicking',
  templateUrl: './flicking.component.html',
  styleUrls: ['./flicking.component.scss']
})
export class FlickingComponent {

  data:Array<any> = []
  bannerData:Array<any> = []
  count:number=1;
  list:Array<any>=[]
  listCount:number=1;
  lists: any = [{}]
  actionBarArray:any=[]


  constructor(private cd :ChangeDetectorRef){
  }

  onNeedPanel(e:any) {
    // ADD PANELS
  }

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
    this.actionBarArray = ActionBarArray
    let newList:any=[]
    this.addItems()
    for(let i = 0; i<3;i++){
      this.bannerData.push(i+1 +"-banner")
    }
    for(let i = 0; i<10;i++){
      newList.push(this.listCount+"List")
      this.listCount++
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
    this.list = [...this.list,...newList]
  }

  

  addItems(){
    
    let newData:any = []
    for(let i = 0;i<20;i++){
      newData.push(this.count+"companies")
      this.count++
    }
    this.data = [...this.data,...newData]
    console.log('data',this.data)

  }



  addData(event:boolean){
    console.log('in parent')
    if(event){
      this.addItems()
    }
  }
}
