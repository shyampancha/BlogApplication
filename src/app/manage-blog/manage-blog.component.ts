// import { EditBlogComponent } from './../edit-blog/edit-blog.component';
import { Routes } from '@angular/router';
import { CreateBlogComponent } from './../create-blog/create-blog.component';
import { Blog } from './../blogs.model';
import { BlogService } from './../blogs.service';
import { Component, OnInit } from '@angular/core';
//import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-manage-blog',
  templateUrl: './manage-blog.component.html',
  styleUrls: ['./manage-blog.component.css']
})

export class ManageBlogComponent implements OnInit {

blogs: Blog[] = [
  
];

// blogs=[
//   {title:"First Blog" ,content:"First blog description"},
//   {title:"Second Blog" ,content:"Second blog description"},
//   {title:"Third Blog" ,content:"Third blog description"}
// ]

  constructor(public blogService: BlogService) { }

  ngOnInit() {
    this.blogs=this.blogService.getBlog()
   
  }

  editBlog(id:number){
    if(confirm("are you want to edit blog id="+id))
    {
      this.blogService.editBlog(id);
      this.blogs=this.blogService.getBlog()
    }
   
   }

  deleteBlog(id:number){
    if(confirm("are you want to delete blog id="+id))
    {
      this.blogService.deleteBlog(id);
      this.blogs=this.blogService.getBlog();
    }
  //   this.blogService.deleteBlog( Title)
  //   .subscribe({
  //     next:(this.blogs) ,{
  //       alert("blog delete succesfully");
  //     },
  //     console.error();
      

  //   })
  // }

  }
 

}
