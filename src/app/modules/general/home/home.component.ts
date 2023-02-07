import { Component, OnInit } from '@angular/core';
import { DataService } from './../../../services/data.service';
import { environment } from '../../../../environments/environment';
import { SeoService } from '../../../services/seo/seo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { NotificationService } from 'src/app/services/notification.service';
import { Gallery } from 'ng-gallery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  model: any;
  allHomeData: any;
  imgPath = environment?.imgPath;
  queryForm: FormGroup | any;
  submitted: boolean = false;
  loading: boolean = false;
  kpis: any;

  constructor(
    private seoService: SeoService, 
    private dataService: DataService, 
    private fb: FormBuilder,
    private notification: NotificationService,
    private gallery: Gallery
    ) {
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
          slidesToShow: 2,
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
    slidesToShow: 4,
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
          slidesToShow: 2,
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

  async ngOnInit () {
    this.buildQueryForm(); 
    this.getAllData();
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
      console.log(this.kpis)
      this.loading = false;
      console.log(this.allHomeData)
    })
  }

  /**
   * Function to Enquiry Courses
   */
  async onSubmit() {
    this.submitted = true;
    if(this.queryForm.invalid) {
      return;
    } else {
      let action = "enquiries";
      await this.dataService.postData(action, this.queryForm?.value).subscribe((res: any) => {
        if(res?.status == 200) {
          this.notification.openSuccessAlert(res?.message);
        }
      }, error => {
        this.notification.openErrorAlert(error);
      })
    }
  }
}