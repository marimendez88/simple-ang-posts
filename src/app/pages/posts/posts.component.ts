import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  mensajes: any[];

  constructor(private DataService: DataService) {}

  ngOnInit() {
    this.mensajes = this.DataService.getPost();

    // .subscribe((posts: any[]) => {
    //   console.log(posts);

    //   this.mensajes = posts;
    // });
  }
}
