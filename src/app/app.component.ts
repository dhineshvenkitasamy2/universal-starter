import {Component, OnInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
  <div class="app-container">
    <h1>Angular Universal Demo utilizing Angular & Angular CLI</h1>
    <nav class="nav-links">
      <a routerLink="/">Home</a>
      <a routerLink="/lazy">Lazy-loaded Route</a>
      <a routerLink="/lazy/nested">Nested Routes work too</a>
    </nav>
    <div class="router-container">
      <router-outlet></router-outlet>
    </div>
  </div>
  `,
  styles: [`
    :host {
      background: #f1f1f1;
      font-family: Roboto,"Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;
      font-display: swap;
    }
    .nav-links {
      background: #008591;
    }
    .nav-links a {
      color: #fff;
      display: inline-block;
      padding: 1rem;
      margin-right: 3rem;
      text-decoration: none;
      font-weight: bold;
      letter-spacing: 0.1rem;
    }
    .router-container {
      border: 0.5rem #00afc4 solid;
      padding: 2rem;
    }
  `]
})
export class AppComponent implements OnInit {
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
      { name: 'og:url', content: 'https://medium.com/google-cloud/deploying-an-angular-app-using-google-cloud-run-7a4d59048edd' },
      { name: 'og:title', content: 'initial page title' },
      { name: 'og:description', content: 'INITIAL PAGE DESCRIPTION CHECK' },
      { name: 'og:image', content: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png' },
      { name: 'og:image:width', content: "400"},
      { name: 'og:image:height', content: "300" },
      { name: 'twitter:title', content: 'INITIAL PAGE TWITTER TITLE' },
      { name: 'twitter:description', content: 'INITIAL PAGE TWITTER DESCRIPTION' },
      { name: 'twitter:image', content: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png' },
      { name: 'twitter:image:height', content: "400"  },
      { name: 'twitter:image:width', content: "300" },
      { name: 'twitter:card', content: "summary" }]);
  }
  
}
