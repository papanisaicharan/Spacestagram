import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './models/photo.model';

@Injectable({ providedIn: 'root' })
export class NasaAPIService {
  constructor(private http: HttpClient) {}

  fetchRoverImages(date: string) {
    return this.http.get<Photo[]>(
      // we can also set the param in the url item, but preferring this way.
      // earth_date	YYYY-MM-DD	
      'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date='+date
      // instead use interceptor, and add the params
      // {
      //   params: new HttpParams().set('auth', user.token)
      // }
    );
  }
}
