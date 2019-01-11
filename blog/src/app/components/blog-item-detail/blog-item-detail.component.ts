import {Component, OnInit} from '@angular/core';
import {PostServiceService} from "../../services/post-service.service";
import {Post} from "../../classes/post";
import {Image} from "../../classes/image";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-blog-item-detail',
  templateUrl: './blog-item-detail.component.html',
  styleUrls: ['./blog-item-detail.component.css']
})
export class BlogItemDetailComponent implements OnInit {
  article:Post;
  route:ActivatedRoute
  router:Router;
  postService:PostServiceService;
  constructor(postService:PostServiceService, router:Router, route:ActivatedRoute) {
    this.postService=postService;
    this.router=router;
    this.route=route;
  }

  ngOnInit() {
    this.postService.getOne(this.route.snapshot.paramMap.get("id")).subscribe(val=>{
      this.article=val;
    });
  }

}
