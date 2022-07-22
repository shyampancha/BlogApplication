import { BlogService } from './../blogs.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {

  id=0;
  constructor(public BlogService:BlogService) { 

  }

  ngOnInit(): void {
  }

  onPostAdded(Form:NgForm){

    if(Form.invalid){
      return
    }
    this.BlogService.addBlog(Form.value.title,Form.value.description,Form.value.dateTime,++this.id);
       alert('your blog post')
       Form.resetForm();
  }
  clearForm(Form:NgForm)
  {
    Form.resetForm();
    alert('blog reset');

  }

}
