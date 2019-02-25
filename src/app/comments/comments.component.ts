import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  url = 'http://jsonplaceholder.typicode.com/comments';
  comments: any;
  columns = ['Name', 'Email Id', 'Comment'];
  ngOnInit() {
    this.http.get(this.url)
    .toPromise()
    .then(res => {
      this.comments = res;
    });
  }

}
