import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public createRequestToken(){
    let constUrl = environment['baseURL'] +'authentication/token/new?api_key='+environment['APIKEY'];
    return this.httpClient.get(constUrl);
  }

  public createSession(obj){
    let constUrl = environment['baseURL'] +'authentication/session/new?api_key='+environment['APIKEY'];
    return this.httpClient.post(constUrl,obj);
  }

  public getProfile(){
    let constUrl = environment['baseURL'] +'account?api_key='+environment['APIKEY']+'&session_id=1795f80214ce30b59766d82b655e505cdc9a2da6';
    return this.httpClient.get(constUrl);
  }

}
