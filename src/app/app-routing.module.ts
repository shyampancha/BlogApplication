// import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { ManageBlogComponent } from './manage-blog/manage-blog.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';





const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'createBlog',component:CreateBlogComponent},
  {path:'manageBlog',component:ManageBlogComponent},
  // {path:'editBlog/:id',component:EditBlogComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
