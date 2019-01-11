import {Component, EventEmitter, Input, OnInit, Output,} from '@angular/core';
import {Router} from "@angular/router";
import {PostServiceService} from "../../services/post-service.service";
import {Post} from "../../classes/post";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Output('getArticles') getArticles=new EventEmitter<object>();
  public title:string;
  @Input('filterText') filterText: string;
  articles$:Post[];
  router: Router;
  postService:PostServiceService;

  constructor(router: Router,postService: PostServiceService) {
    this.router=router;
    this.postService=postService;
  }

  ngOnInit() {
    this.postService.getAll().subscribe(res=>{
      this.articles$=res;
    })
    this.getArticles.emit(this.articles$);
  }

}
