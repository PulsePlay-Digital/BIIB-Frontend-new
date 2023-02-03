import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { DataService } from 'src/app/services/data.service';
import { NotificationService } from 'src/app/services/notification.service';
import { MenuType } from './types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
constructor(public http: HttpClient, private notify: NotificationService, private dataService: DataService) {

}
  logo: string = './assets/imgs/biib-logo.png';
  universityLogo: string = "./../../../assets/imgs/uni_logo.png";
  menu: Array<MenuType> = [
    {
      name: 'Founder',
      opened: false,
      url: '/founder'
    },
    {
      name: 'Placements',
      opened: false,
      url: '/placement'
    },
    {
      name: 'About BIIB',
      opened: false,
      url: '/about/about-biib'
    },
    {
      name: 'Admission',
      opened: false,
      url: '/admission'
    },
    {
      name: 'Contact Us',
      opened: false,
      url: '/contact'
    },
    {
      name: 'Menu',
      opened: false,
      children: [
        {
          name: 'About',
          subtitle: 'MBA Program',
          url: '/mba-program/about-mba',
          children: [
            {
              name: 'About MBA',
              url: '/mba-program/about-mba'
            },
            {
              name: 'AICTE',
              url: '/mba-program/aicte-approval'
            },
            {
              name: 'Induction Program',
              url: '/mba-program/induction-program'
            },
            {
              name: 'Classroom based training',
              url: '/mba-program/classroom-based-training'
            },
            {
              name: 'NIRF 2022',
              url: 'biib'
            },
            {
              name: 'Mandatory disclosure',
              url: 'biib'
            }
          ]
        },
        {
          name: 'Industry',
          subtitle: 'Industry Interface',
          url: '/industry-program/guest-lectures',
          children: [
            {
              name: 'Guest Lectures',
              url: '/industry-program/guest-lectures'
            },
            {
              name: 'Leadership Training',
              url: '/industry-program/national-business-training'
            },
            {
              name: 'National Business Convention',
              url: '/industry-program/national-business-training'
            },
            {
              name: 'Special guest visit',
              url: '/industry-program/special-guest-visit'
            },
            {
              name: 'Internship',
              url: '/industry-program/internship'
            }
          ]
        },
        {
          name: 'Why BIIB',
          subtitle: 'Student Life',
          url: '/student-life/student-council',
          children: [
            {
              name: 'Student Council',
              url: '/student-life/student-council'
            },
            {
              name: 'IT infrastructure',
              url: '/student-life/infrastructure'
            },
            {
              name: 'Library',
              url: '/student-life/library'
            },
            {
              name: 'Hostel',
              url: '/student-life/hostel'
            },
            {
              name: 'Cafeteria and mess',
              url: '/student-life/cafeteria-mess'
            },
            {
              name: 'Facilities',
              url: '/student-life/facilities'
            }
          ]
        },
        {
          name: 'Alumni',
          subtitle: 'Alumni',
          url: '/alumni/success-stories',
          children: [
            {
              name: 'Success Story',
              url: '/alumni/success-stories'
            },
            {
              name: 'Alumni Meet',
              url: '/alumni/alumni-meet'
            },
            {
              name: 'Transcript Application',
              url: '/alumni/transcript-application'
            },
            {
              name: 'Online grievance redressal',
              url: '/alumni/online-grievance'
            },
            {
              name: 'Social Media',
              url: '/alumni/social-media'
            }
          ]
        }
      ]
      // url: '/admission'
    }
  ]
  async ngOnInit() {
    // await this.dataService.getData('products').subscribe(res => console.log(res), error => {
    //   this.notify.openFailureSnackBar(error)
    // });
  }

}
