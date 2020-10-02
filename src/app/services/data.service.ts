import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  public searchQuery(keyword){
    let constUrl = environment['baseURL'] +'search/movie?api_key='+environment['APIKEY'] +'&query='+ keyword;
    return this.httpClient.get(constUrl);
  }

  public getFilterList(listId){
    let constUrl = environment['baseURL'] +'list/'+listId+'?api_key='+environment['APIKEY']+'&language=en-US';
    return this.httpClient.get(constUrl);
  }

  public movieDetail(movieId){
    let constUrl = environment['baseURL'] +'movie/'+movieId+'?api_key='+environment['APIKEY']+'&language=en-US';
    return this.httpClient.get(constUrl);
  }
}
