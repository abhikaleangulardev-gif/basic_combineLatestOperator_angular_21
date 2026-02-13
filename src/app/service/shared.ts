import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Shared {
  myUserApiUrls: string = 'https://jsonplaceholder.typicode.com/users';
  myCommentApiUrls: string = 'https://jsonplaceholder.typicode.com/comments';
  myAlbumsApiUrls: string = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) { }


  getAllDetailsList() {

    // First method in combinelatest
    // return combineLatest([
    //   this.http.get(this.myUserApiUrls),
    //   this.http.get(this.myCommentApiUrls),
    //   this.http.get(this.myAlbumsApiUrls),
    // ]);

    // Second method in combinelatest

    return combineLatest([
      this.http.get(this.myUserApiUrls),
      this.http.get(this.myCommentApiUrls),
      this.http.get(this.myAlbumsApiUrls),
    ]).pipe(
      map(([users, comments, albums]) => {
        return {
          users,
          comments,
          albums
        }
      })
    );
  }
}
