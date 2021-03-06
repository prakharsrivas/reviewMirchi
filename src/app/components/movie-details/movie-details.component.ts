import { Component, Input, OnInit} from '@angular/core';
import { DataService } from '../../services/data.service';
import { environment } from '../../../environments/environment';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit{

  @Input() seachResultSet:any;
  public baseImageURL:string=environment['baseImageURL'];
  public defaultImg:string= "../../../assets/Poster_unavailable.jpg";
  public moiveData:any;

  constructor( private dataService: DataService,private router:Router,private activatedRoute:ActivatedRoute){
  }

  ngOnInit(): void {
    this.movieDetailsFun(this.activatedRoute.snapshot.params['id']);
  }

  public movieDetailsFun(moiveId){
    this.dataService.movieDetail(moiveId).subscribe((data: any[])=>{
      this.moiveData = data;
    })
  }

}
