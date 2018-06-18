import { Component, Input, OnInit } from '@angular/core';
import { OnePost } from '../post.class';
import { POSTLIST } from '../post.list';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postCreatedAt: Date;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() index: number;



  constructor() { }

  ngOnInit() {
  }
  
  loveItsFunction(arg: string){
    if(arg === 'plus'){
      this.postLoveIts++;
    }else if(arg === 'less'){
      this.postLoveIts--;
    }
  }
}