import { Component, OnInit ,Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DataService } from '../../services/data.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-showcase',
  templateUrl: './movie-showcase.component.html',
  styleUrls: ['./movie-showcase.component.scss']
})
export class MovieShowcaseComponent implements OnInit {

  @Input() seachResultSet:any;
  @Input() seachResultSetLength:string;
  @Input() backButton:boolean;
  public baseImageURL:string=environment['baseImageURL'];
  public defaultImg:string="../../../assets/Poster_unavailable.jpg";
  public seachResultFlag:boolean=true;

  
  constructor( private dataService: DataService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.backButton);
    console.log(this.seachResultSet);
  }

  public backFun(){  
    this.seachResultFlag=!this.seachResultFlag;
  }

  public addtoList(event){
    console.log(event);
  }
}
