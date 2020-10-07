import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public seachKeyword:string;
  public seachResultSet:any;
  public seachResultSetLength:number;
  public seachResultFlag:boolean=false;
  public baseImageURL:string=environment['baseImageURL'];
  public defaultImg:string= "../../../assets/Poster_unavailable.jpg"

  constructor( private dataService: DataService) { }

  ngOnInit(): void {

  }

  searchFun(){
    this.dataService.searchQuery(this.seachKeyword).subscribe((data: any[])=>{
      this.seachResultSet = data['results'];
      this.seachResultFlag=true;
      this.seachResultSetLength = Number(data['results'].length * 300);
    })
  }


}
