import { Component } from '@angular/core';
import { POSTLIST } from './post.list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Posts';

  postlist = POSTLIST;

}