import { Blog } from './../blogs.model';
import { BlogService } from './../blogs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(public blogService: BlogService) { }

  ngOnInit() {
    this.blogs=this.blogService.getBlog()
  }

}
