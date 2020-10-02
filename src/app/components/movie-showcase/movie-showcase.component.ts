import { Component, OnInit ,Input } from '@angular/core';
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-movie-showcase',
  templateUrl: './movie-showcase.component.html',
  styleUrls: ['./movie-showcase.component.scss']
})
export class MovieShowcaseComponent implements OnInit {

  @Input() seachResultSet:any;
  @Input() seachResultSetLength:string;
  public baseImageURL:string=environment['baseImageURL'];
  public defaultImg:string="../../../assets/Poster_unavailable.jpg";
  
  constructor() { }

  ngOnInit(): void {
  }

  public addtoList(){
    console.log('asda');
  }
}
