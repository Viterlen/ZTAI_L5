import {Component, Input, OnInit} from '@angular/core';
import {PostServiceService} from "../../services/post-service.service";
import {Post} from "../../classes/post";
import {Image} from "../../classes/image";

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {
  @Input()article:Post;
  postService: PostServiceService;
  constructor(postService: PostServiceService) {
    this.postService=postService;
  }

  ngOnInit() {
  }

}
