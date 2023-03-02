import { Component, Inject, Input, OnInit } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';

import { Quote } from './quote';
import { SeoService } from '../../../services/seo/seo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  quote: Quote;
  id: number;
  sideMenu = [
    {
      id: 1,
      name: "Why BIIB",
      route: "/about/about-biib"
    },
    {
      id: 2,
      name:"History",
      route: "/about/history"
    },
    {
      id: 3,
      name:"The University",
      route:"/about/career",
      href:"https://www.sbup.edu.in/"
    },
    {
      id: 4,
      name:"Top Brass",
      route:"/about/leadership-team"
    },
    {
      id:5,
      name:"Careers",
      route:"/about/career"     
    }
  ];

  constructor(
    private seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: object) {

    const content = 'About content with meta';
    this.seoService.setMetaDescription(content);

    this.id = 0;
    this.quote = new Quote();
 

  }

  ngOnInit(): void {
    this.loadQuote();

    const content =
      'BIIB' + 'About page description';

    const title = 'BIIB : About Page';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);

  }


  loadQuote() {
    const quotes = [
      {
        name: 'Lawrence of Arabia',
        title: 'There is nothing in the desert and no man needs nothing',
        link: 'https://en.wikipedia.org/wiki/Lawrence_of_Arabia_(film)'
      },
      {
        name: 'Alien Prometheus',
        title: 'Big things have small beginnings',
        link: 'https://en.wikipedia.org/wiki/Prometheus_(2012_film)'
      },
      {
        name: 'Blade Runner',
        title: 'All those moments will be lost in time... like tears in rain... Time to die.',
        link: 'https://en.wikipedia.org/wiki/Blade_Runner'
      },
    ];
    const index = quotes.length;
    let id = this.id;
    while (this.id === id) {
      id = Math.floor(Math.random() * index);
    }
    this.id = id;
    this.quote = quotes[id];
  }

}

