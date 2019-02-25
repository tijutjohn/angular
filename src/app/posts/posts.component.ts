import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  posts: any;
  columns = ['Post Title', 'Content'];
  url = 'http://jsonplaceholder.typicode.com/posts';

  ngOnInit() {
    this.http.get(this.url)
      .toPromise().then(res => {
        this.posts = res;
      });
  }
}
