import {Component, OnInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  template: `
    <h3>{{ message }}</h3>
    <img [src]="image">
  `
})
export class HomeComponent implements OnInit {
  public message = `Angular Universal test`;
  // tslint:disable-next-line:max-line-length
  public image = 'https://camo.githubusercontent.com/81f72f2fdf98aa1d30b5b215bc8ca9420b249e81/68747470733a2f2f616e67756c61722e696f2f67656e6572617465642f696d616765732f6d61726b6574696e672f636f6e636570742d69636f6e732f756e6976657273616c2e706e67';
  title = 'Angular 10 Universal Example';
  constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'Angular, Universal, Example'},
      {name: 'description', content: 'Angular Universal Example'},
      {name: 'robots', content: 'index, follow'}
    ]);
    this.metaService.addTags([
      { name: 'og:url', content: 'https://www.nfp.com/' },
      { name: 'og:title', content: 'TITLE CHECK' },
      { name: 'og:description', content: 'DESCRIPTION CHECK' },
      { name: 'og:image', content: 'https://picsum.photos/200' },
      { name: 'og:image:width', content: "400"},
      { name: 'og:image:height', content: "300" },
      { name: 'twitter:title', content: 'TWITTER TITLE' },
      { name: 'twitter:description', content: 'TWITTER DESCRIPTION' },
      { name: 'twitter:image', content: 'https://picsum.photos/200' },
      { name: 'twitter:image:height', content: "400"  },
      { name: 'twitter:image:width', content: "300" },
      { name: 'twitter:card', content: "summary" }]);
  }
  
}
