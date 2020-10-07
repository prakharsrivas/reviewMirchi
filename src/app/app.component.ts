import { Component } from '@angular/core';
import { UserService } from '../../src/app/services/user.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Reviews Mirchi';

  public profileData:any;

  constructor( private userService: UserService) {} 

  ngOnInit(): void {
  this.getToken();
  this.getProfileData();
  }

  public getToken(){
    this.userService.createRequestToken().subscribe((loginData: any[])=>{
      let obj = {"request_token": loginData['request_token']}
      this.userService.createSession(obj).subscribe((data: any[])=>{
       console.log(data);
      })
    })
  }

  public getProfileData(){
    this.userService.getProfile().subscribe((profileData: any[])=>{
      this.profileData = profileData;
       console.log(profileData);
    })
  }
}
