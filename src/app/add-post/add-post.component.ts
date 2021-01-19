import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PostPayload} from './post-payload';
import {AddPostService} from '../add-post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  addPostForm: FormGroup;
  postPayLoad: PostPayload;
  title = new FormControl('');
  body = new FormControl('');

  constructor(private addPostService: AddPostService, private router: Router) {
    this.addPostForm = new FormGroup({
      title: this.title,
      body: this.body
    });
    this.postPayLoad = {
      id: '',
      title: '',
      content: '',
      username: ''
    };
  }

  ngOnInit(): void {
  }

  addPost(): void {
    this.postPayLoad.title = this.addPostForm.get('title')?.value;
    this.postPayLoad.content = this.addPostForm.get('body')?.value;
    this.addPostService.addPost(this.postPayLoad).subscribe(data => {
      this.router.navigateByUrl('/');
    }, error => {
      console.log('Response Failure');
    });
  }
}
