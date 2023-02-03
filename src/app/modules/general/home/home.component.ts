import { Component, OnInit } from '@angular/core';
import { DataService } from './../../../services/data.service';
import { environment } from '../../../../environments/environment';
import { SeoService } from '../../../services/seo/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  model: any;

  constructor(private seoService: SeoService, private dataService: DataService) {
    const content =
      'It applies Routing, Lazy loading and Progressive Web App (PWA)';

    const title = 'BIIB : Home Page';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);
  }

  leadershipConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: "<div class='nav-btn next-slide'></div>",
    prevArrow: "<div class='nav-btn prev-slide'></div>",
    arrow: false,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: 250,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  testimonial = [
    {
      id: 1, url: "./../../../../assets/imgs/homeImages/leadership01.png", name: "Soumik Das", batch:"2019-21",
      title: 'Students and Leaders Opinions', description: 'There’s a Chinese Proverb which goes, “Be not afraid of growing slowly, be afraid of only standing still.” With this in mind I came to Sri Balaji University. Hailing from the town of Jamshedpur, I was accompanied by my childhood friends to SBU to explore myself, came here not only for studies but for learning. According to me, a manager must be ready for anything that comes in his way and should have a practical solution for each problem in his path'
    },
    {
      id: 2, url: "./../../../../assets/imgs/homeImages/leadership01.png", name: "Ram Charan", batch:"2020-22",
      title: 'Students and Leaders Opinions', description: 'There’s a Chinese Proverb which goes, “Be not afraid of growing slowly, be afraid of only standing still.” With this in mind I came to Sri Balaji University. Hailing from the town of Jamshedpur, I was accompanied by my childhood friends to SBU to explore myself, came here not only for studies but for learning. According to me, a manager must be ready for anything that comes in his way and should have a practical solution for each problem in his path'
    },
    {
      id: 3, url: "./../../../../assets/imgs/homeImages/leadership01.png", name: "Subash Bose", batch:"2019-21",
      title: 'Students and Leaders Opinions', description: 'Col Balasubramanian was the first Indian to be honoured as the Indian Army’s Honorary Colonel by the President for his pioneering work in management education.'
    },
  ]
  testimonialConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: "<div class='nav-btn next-slide'></div>",
    prevArrow: "<div class='nav-btn prev-slide'></div>",
    arrow: false,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500
  };
  
  campusGallery = [
    {id:1, url:"https://preview.ibb.co/i0PmHk/1.jpg"},
    {id:2, url:"https://preview.ibb.co/mWpE3Q/2.jpg"},
    {id:3, url:"https://preview.ibb.co/i0PmHk/1.jpg"},
    {id:4, url:"https://preview.ibb.co/mysOxk/3.jpg"},
    {id:5, url:"https://preview.ibb.co/i0PmHk/1.jpg"},
    {id:6, url:"https://preview.ibb.co/mWpE3Q/2.jpg"},
    {id:7, url:"https://preview.ibb.co/i0PmHk/1.jpg"}
  ];

  partnerConfig = {
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: "<div class='nav-btn next-slide'><i class='fas fa-chevron-right'></i></div>",
    prevArrow: "<div class='nav-btn prev-slide'><i class='fas fa-chevron-left'></i></div>",
    arrow: true,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  allHomeData: any;
  imgPath = environment?.imgPath;
  async ngOnInit () {
    this.getAllData();
  }

  /**
   * Function to Get all common data
   */
  async getAllData() {
    let action: string = "homePage";
    await this.dataService.getData(action).subscribe((res: any) => {
      this.allHomeData = res?.data;
      console.log(this.allHomeData)
    })
  }
}