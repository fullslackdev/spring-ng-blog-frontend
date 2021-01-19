import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostPayload} from './add-post/post-payload';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {

  constructor(private httpClient: HttpClient) { }

  addPost(postPayLoad: PostPayload): Observable<any> {
    return this.httpClient.post('http://localhost:8080/api/posts/', postPayLoad);
  }

  getAllPosts(): Observable<Array<PostPayload>> {
    return this.httpClient.get<Array<PostPayload>>('http://localhost:8080/api/posts/all');
  }

  getPost(permaLink: number): Observable<PostPayload> {
    return this.httpClient.get<PostPayload>('http://localhost:8080/api/posts/get/' + permaLink);
  }
}
