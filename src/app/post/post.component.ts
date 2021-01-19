import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AddPostService} from '../add-post.service';
import {Observable} from 'rxjs';
import {PostPayload} from '../add-post/post-payload';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  permaLink: number;
  post: PostPayload;

  constructor(private router: ActivatedRoute, private postService: AddPostService) {
    this.permaLink = 0;
    this.post = {
      id: '',
      title: '',
      content: '',
      username: ''
    };
  }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.permaLink = params.id;
    });

    this.postService.getPost(this.permaLink).subscribe((data: PostPayload) => {
      /*this.post.id = data.id;
      this.post.title = data.title;
      this.post.content = data.content;
      this.post.username = data.username;*/
      this.post = data;
    }, (error: any) => {
      console.log('Response Failure Single Post');
    });
  }

}
