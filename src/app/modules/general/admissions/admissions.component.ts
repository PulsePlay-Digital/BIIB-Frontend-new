import { Component } from '@angular/core';

@Component({
  selector: 'app-admissions',
  templateUrl: './admissions.component.html',
  styleUrls: ['./admissions.component.scss']
})
export class AdmissionsComponent {
  sideMenu = [
    {
      id: 1,
      name: "Eligibility",
      route: "/admission/eligibility"
    },
    {
      id: 2,
      name:"How to Apply",
      route: "/admission/apply"
    },
    {
      id: 3,
      name:"Admission Process",
      route:"/admission/process"
    },
    {
      id: 4,
      name:"Education Loan",
      route:"/admission/education-loan"
    },
    {
      id:5,
      name:"FAQ",
      route:"/admission/FAQ"     
    },
    {
      id:6,
      name:"Apply Online",
      route:"/admission/FAQ"     
    },
    {
      id:6,
      name:"Fee Structure",
      route:"/admission/fee-structure"     
    }
  ];
}
