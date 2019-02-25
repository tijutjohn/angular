import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private http: HttpClient) { }

  url = 'https://jsonplaceholder.typicode.com/users';

  listOfUsers: any;
  columns = ['Name', 'Email', 'Phone', 'WebSite', 'Address'];
  ngOnInit() {
   this.http.get(this.url).toPromise().then(res => {
    this.listOfUsers = res;
   });
  }

}
