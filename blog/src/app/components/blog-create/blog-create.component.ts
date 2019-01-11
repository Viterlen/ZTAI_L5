import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostServiceService} from "../../services/post-service.service";

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  profileForm = new FormGroup({
    title: new FormControl('',Validators.required),
    url: new FormControl('',Validators.required),
    content: new FormControl('',Validators.required)
  });

  constructor(private service: PostServiceService) { }

  ngOnInit() {

  }
  onSubmit(){
    this.service.savePost(this.profileForm.value).subscribe(res=>{
      console.log(res.data);
    });
  }

}
