import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MenuType } from './types';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  logo: any = './assets/imgs/BIIB-logo.webp';

  menu: Array<MenuType> = [
    // {
    //   name: 'Founder',
    //   opened: false,
    //   url: '/founder'
    // },
    {
      name: 'Alumni',
      children: [
        {
          name: 'About on Facebook',
          url: 'https://www.facebook.com/groups/sribalajisocietyglobal/',
        },
        {
          name: 'Online grievance redressal',
          url: '/alumni/online-grievance'
        },
        {
          name: 'Transcript Application',
          url: '/alumni/transcript-application'
        }
        // {
        //   name: 'Social Media',
        //   url: '/alumni/social-media'
        // }
      ]
    },
    {
      name: 'Placements',
      children: [
        {
          name: 'Placement',
          url: '/placement/placement-by-year',
        },
        {
          name: 'MOU with Phillip',
          url: '/placement/mou'
        },
        {
          name: 'IT Sector',
          url: '/placement/IT-sector'
        },
        {
          name: 'Non-IT Sector',
          url: '/placement/Non-IT-sector'
        },
        {
          name: 'Past Trend',
          url: '/placement/past-trend'
        },
        {
          name: 'Our Experience',
          url: 'https://www.facebook.com/SriBalajiSocietyPune.MyCPE.Forum/?ref=br_rs'
        }
      ]
    },
    {
      name: 'About BIIB',
      children: [
        {
          name: 'Ranking',
          url: '/about/about-biib',
        },
        {
          name: 'History',
          url: '/about/history'
        },
        {
          name: 'The University',
          url: 'https://www.sbup.edu.in/'
        },
        {
          name: 'Top Brass',
          url: '/about/leadership-team'
        },
        {
          name: 'Careers',
          url: '/about/career'
        }
      ]
    },
    {
      name: 'Admission',
      children: [
        {
          name: 'Apply Online',
          url: 'https://admissions.sbup.edu.in/mba/?utm_source=BIMMWebsite&utm_medium=MenuBar&utm_campaign=AdmissionApplyOnlineButton',
        },
        {
          name: 'NIRF 2022',
          url: ''
        },
        {
          name: 'Contact',
          url: '/contact'
        }
      ]
    },
    // {
    //   name: 'Placements',
    //   opened: false,
    //   url: '/placement'
    // },
    // {
    //   name: 'About BIIB',
    //   opened: false,
    //   url: '/about/about-biib'
    // },
    // {
    //   name: 'Admission',
    //   opened: false,
    //   url: '/admission'
    // },
    // {
    //   name: 'Contact Us',
    //   opened: false,
    //   url: '/contact'
    // },
    // {
    //   name: 'Menu',
    //   opened: false,
    //   children: [
    //     {
    //       name: 'About',
    //       subtitle: 'MBA Program',
    //       url: '/mba-program/about-mba',
    //       children: [
    //         {
    //           name: 'About MBA',
    //           url: '/mba-program/about-mba'
    //         },
    //         {
    //           name: 'AICTE',
    //           url: '/mba-program/aicte-approval'
    //         },
    //         {
    //           name: 'Induction Program',
    //           url: '/mba-program/induction-program'
    //         },
    //         {
    //           name: 'Classroom based training',
    //           url: '/mba-program/classroom-based-training'
    //         },
    //         {
    //           name: 'NIRF 2022',
    //           url: 'biib'
    //         },
    //         {
    //           name: 'Mandatory disclosure',
    //           url: 'biib'
    //         }
    //       ]
    //     },
    //     {
    //       name: 'Industry',
    //       subtitle: 'Industry Interface',
    //       url: '/industry-program/guest-lectures',
    //       children: [
    //         {
    //           name: 'Guest Lectures',
    //           url: '/industry-program/guest-lectures'
    //         },
    //         {
    //           name: 'Leadership Training',
    //           url: '/industry-program/national-business-training'
    //         },
    //         {
    //           name: 'National Business Convention',
    //           url: '/industry-program/national-business-training'
    //         },
    //         {
    //           name: 'Special guest visit',
    //           url: '/industry-program/special-guest-visit'
    //         },
    //         {
    //           name: 'Internship',
    //           url: '/industry-program/internship'
    //         }
    //       ]
    //     },
    //     {
    //       name: 'Why BIIB',
    //       subtitle: 'Student Life',
    //       url: '/student-life/student-council',
    //       children: [
    //         {
    //           name: 'Student Council',
    //           url: '/student-life/student-council'
    //         },
    //         {
    //           name: 'IT infrastructure',
    //           url: '/student-life/infrastructure'
    //         },
    //         {
    //           name: 'Library',
    //           url: '/student-life/library'
    //         },
    //         {
    //           name: 'Hostel',
    //           url: '/student-life/hostel'
    //         },
    //         {
    //           name: 'Cafeteria and mess',
    //           url: '/student-life/cafeteria-mess'
    //         },
    //         {
    //           name: 'Facilities',
    //           url: '/student-life/facilities'
    //         }
    //       ]
    //     },
    //     {
    //       name: 'Alumni',
    //       subtitle: 'Alumni',
    //       url: '/alumni/success-stories',
    //       children: [
    //         {
    //           name: 'Success Story',
    //           url: '/alumni/success-stories'
    //         },
    //         {
    //           name: 'Alumni Meet',
    //           url: '/alumni/alumni-meet'
    //         },
    //         {
    //           name: 'Transcript Application',
    //           url: '/alumni/transcript-application'
    //         },
    //         {
    //           name: 'Online grievance redressal',
    //           url: '/alumni/online-grievance'
    //         },
    //         {
    //           name: 'Social Media',
    //           url: '/alumni/social-media'
    //         }
    //       ]
    //     }
    //   ]
    //   // url: '/admission'
    // }
  ]
  footerLink: any;
  constructor(private dataService: DataService) {

  }
  ngOnInit(): void {
    this.getMenuData()
  }

  async getMenuData() {
    let action = "footerMenu";
    await this.dataService.getData(action).subscribe((res: any) => {
      // console.log(res)
      this.footerLink = res?.data
      console.log(this.footerLink)
    });
  }
}
