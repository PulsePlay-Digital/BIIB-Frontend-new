import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from './../../../services/data.service';
import { environment } from '../../../../environments/environment';
import { SeoService } from '../../../services/seo/seo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification.service';
import { Gallery } from 'ng-gallery';
import { MatDialog } from '@angular/material/dialog';
import { DialogPopupVideoComponent } from 'src/app/shared/components/dialog-popup-video/dialog-popup-video.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  model: any;
  allHomeData: any;
  imgPath = environment?.imgPath;
  queryForm: FormGroup | any;
  submitted: boolean = false;
  loading: boolean = false;
  kpis: any;

  carousel: any;
  slider: any;
  items: any;
  prevBtn: any;
  nextBtn: any;

  width: number = 20;
  height: number = 20;
  totalWidth: number = 20;
  margin: number = 20;
  currIndex: number = 0;
  interval: any = 2000;
  intervalTime: number = 2000;

  constructor(
    private seoService: SeoService,
    private dataService: DataService,
    private fb: FormBuilder,
    private notification: NotificationService,
    private gallery: Gallery,
    private elemRef: ElementRef,
    private dialog : MatDialog
  ) {
    const content =
      'It applies Routing, Lazy loading and Progressive Web App (PWA)';

    const title = 'BIIB : Home Page';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);
  }
  bannerConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: "<div class='nav-btn next-slide'></div>",
    prevArrow: "<div class='nav-btn prev-slide'></div>",
    arrow: false,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
    cssEase: 'linear'
  };

  leadershipConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: "<div class='nav-btn next-slide d-xl-none d-lg-none'><i class='fas fa-arrow-right'></i></div>",
    prevArrow: "<div class='nav-btn prev-slide d-xl-none d-lg-none'><i class='fas fa-arrow-left'></i></div>",
    arrow: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: 250,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrow: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrow: true,
          dots: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrow: true,
          dots: false,
        }
      }
    ]
  };

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

  courseConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: "<div class='nav-btn next-slide'><i class='fas fa-arrow-right'></i></div>",
    prevArrow: "<div class='nav-btn prev-slide'><i class='fas fa-arrow-left'></i></div>",
    arrow: true,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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

  newsConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: "<div class='nav-btn next-slide'><i class='fas fa-arrow-right'></i></div>",
    prevArrow: "<div class='nav-btn prev-slide'><i class='fas fa-arrow-left'></i></div>",
    arrow: true,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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

  partnerConfig = {
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: "<div class='nav-btn next-slide d-none'><i class='fas fa-chevron-right'></i></div>",
    prevArrow: "<div class='nav-btn prev-slide d-none'><i class='fas fa-chevron-left'></i></div>",
    arrow: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  bannerData = [
    {
      id:1,
      name: "Chief Guest - S. V. Nathan",
      designation: "Partner and Chief Talent Officer at Deloitte India",
      purpose:"Convocation MBA Batch 2020-2022",
      file:"/storage/files/Home/Rectangle%2018.png"
    },
    {
      id:2,
      name: "Shri Nitin Gadkari Ji",
      designation: "Minister of Road Transport & Highways, Government of India",
      purpose:"Convocation MBA Batch 2020-2022",
      file:"/assets/imgs/homeImages/banner2.png"
    }
  ]

  async ngOnInit() {
    this.buildQueryForm();
    this.getAllData();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.carousel = document.getElementById('gallerySlider') as HTMLElement | null;
      this.slider = this.carousel.getElementsByClassName('carousel__slider')[0];
      this.items = this.carousel.getElementsByClassName('carousel__slider__item');
      this.prevBtn = this.carousel.getElementsByClassName('carousel__prev')[0],
      this.nextBtn = this.carousel.getElementsByClassName('carousel__next')[0];


      this.resize();
      this.move(Math.floor(this.items.length / 2));
      this.bindEvents();
      this.timer();
    }, 3500);
  }


  bindEvents() {
    window.onresize = this.resize;
    this.prevBtn.addEventListener('click', () => { this.prev(); });
    this.nextBtn.addEventListener('click', () => { this.next(); });
  }

  resize() {
    this.width = Math.max(window.innerWidth * .20, 275);
    this.height = window.innerHeight * .5;
    this.totalWidth = this.width * this.items.length;

    this.slider.style.width = this.totalWidth + "px";

    for (var i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      item.style.width = (this.width - (this.margin * 2)) + "px";
      item.style.height = this.height + "px";
    }
  }

  move(index: any) {
    if (index < 1) index = this.items.length;
    if (index > this.items.length) index = 1;
    this.currIndex = index;

    for (var i = 0; i < this.items.length; i++) {
      let item = this.items[i],
        box = item.getElementsByClassName('item__3d-frame')[0];
      if (i == (index - 1)) {
        item.classList.add('carousel__slider__item--active');
        box.style.transform = "perspective(1200px)";
        item.style.width = (this.width - (this.margin * 3)) + "px";
        item.style.height = this.height + "px";
      } else {
        item.classList.remove('carousel__slider__item--active');
        box.style.transform = "perspective(1200px) rotateY(" + (i < (index - 1) ? 40 : -40) + "deg)";
      }
    }
    this.slider.style.transform = "translate3d(" + ((index * -this.width) + (this.width / 2) + window.innerWidth / 2) + "px, 0, 0)";
  }

  timer() {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.move(++this.currIndex);
    }, this.intervalTime);
  }

  prev() {
    this.move(--this.currIndex);
    this.timer();
  }

  next() {
    this.move(++this.currIndex);
    this.timer();
  }


  buildQueryForm() {
    this.queryForm = this.fb.group({
      id: [""],
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")]],
      phone: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(16)]],
      dob: ["", Validators.required],
      course: ["", Validators.required]
    })
  }

  get q() {
    return this.queryForm.controls;
  }

  /**
   * Function to Get all common data
   */
  async getAllData() {
    this.loading = true;
    let action: string = "homePage";
    await this.dataService.getData(action).subscribe((res: any) => {
      this.allHomeData = res?.data;
      this.kpis = this.allHomeData?.Kpi;
      this.loading = false;
    }, error => {
      this.loading = false;
    })
  }

  /**
   * Function to Enquiry Courses
   */
  async onSubmit() {
    this.submitted = true;
    if (this.queryForm.invalid) {
      return;
    } else {
      let action = "enquiries";
      await this.dataService.postData(action, this.queryForm?.value).subscribe((res: any) => {
        if (res?.status == 200) {
          this.notification.openSuccessAlert(res?.message);
        }
      }, error => {
        this.notification.openErrorAlert(error);
      })
    }
  }

  playAboutVid() {
    const dialog = this.dialog.open(DialogPopupVideoComponent, {
      width: '650px',
    });
    // var video: any = document.getElementById("myVideo") as HTMLElement;
    // console.log(video)

    // if (video.paused) video.play();
    // else video.pause();
  }

  // videoDialog() {
  //   const dialog = this.dialog.open(DialogPopupVideoComponent, {
  //     width: '650px',
  //   });
  // }
}