import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Injectable()
export class TweetsService {

  constructor(
    private http: HttpClient
  ) { }

  getTweetsList(twitterHandle: any) {
    return this.http.get(environment.baseURL + `/${twitterHandle}`);
  }
}
