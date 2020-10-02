import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-quick-filter',
  templateUrl: './quick-filter.component.html',
  styleUrls: ['./quick-filter.component.scss']
})
export class QuickFilterComponent implements OnInit {

  public seachKeyword:string;
  public seachResultSet:any;
  public seachResultSetLength:number;
  public seachResultFlag:boolean=false;
  public baseImageURL:string=environment['baseImageURL'];
  public defaultImg:string= "../../../assets/Poster_unavailable.jpg";

  constructor( private dataService: DataService) { }

  ngOnInit(): void {
    this.searchFun('7060180');
  }

  searchFun(listId){
    this.dataService.getFilterList(listId).subscribe((data: any[])=>{
      this.seachResultFlag=true;
      this.seachResultSetLength = Number(data['items'].length * 300);
      this.seachResultSet = data['items'];
    })
  }

}
