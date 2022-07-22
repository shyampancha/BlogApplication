import { Routes } from '@angular/router';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { Injectable } from "@angular/core";
import { Blog } from "./blogs.model";


@Injectable({providedIn:'root'})
export class BlogService{
   
  
  
    private blogs: Blog[]=[];

    addBlog(title:string, description:string, dateTime:any,id:number){
        const blog:Blog={
            title:title, description:description,dateTime:new Date(),id
        };
        this.blogs.push(blog);
        this.blogs.sort((a,b)=>b.id-a.id);
       
        

    }
    getBlog(){
        return this.blogs
    }
    editBlog(id: number){
        this.blogs=this.blogs.filter((f)=>f.id !==id)
    }

    deleteBlog(id: number){
        this.blogs=this.blogs.filter((f)=>f.id !==id)
    }
}