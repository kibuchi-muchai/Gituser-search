import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class ProfileService {
  private username: string;
  private apiKey: string;
  private clientid = '04511280a0bd968efcba';
  private clientsecret = '495a9cf8cb6181dd08e5cd51e2ca6eebfe2eb88d';
  
  constructor(private http:HttpClient) { 
    console.log("service is now ready!");
    this.username = 'kibuchi-muchai';
    this.apiKey = 'environment.apiKey'

  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret + '?access_token=' + this.apiKey)
    .pipe(map(res => res));

  }

  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret + '/repos?access_token=' + this.apiKey)
    .pipe(map(res => res));

  }
  updateProfile(username:string){
    this.username = username;
  }
}
