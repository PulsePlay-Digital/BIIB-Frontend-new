import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-placement-by-year',
  templateUrl: './placement-by-year.component.html',
  styleUrls: ['./placement-by-year.component.scss']
})
export class PlacementByYearComponent implements OnInit {
  // selectedYear = "2020-2022";
  placementByYear: Array<any> = [
    { id: 1, year: "2020-2022", std_name: 'New age', cmp_name: "HCL" },
    { id: 6, year: "2020-2022", std_name: 'New Ak', cmp_name: "HCL 1" },
    { id: 2, year: "2019-2021", std_name: 'twenty age', cmp_name: "IBM" },
    { id: 4, year: "2019-2021", std_name: 'Note 201', cmp_name: "ICL" },
    { id: 3, year: "2018-2020", std_name: 'Note', cmp_name: "Wipro" },
    { id: 5, year: "2018-2020", std_name: 'Note 22', cmp_name: "Wipro 1" }
  ];
  byYear: Array<any> = [];
  years: Array<any> = [{ year: "2018-2020" }, { year: "2019-2021" }, { year: "2020-2022" }]
  ngOnInit() {
  }

  onSelectYear(event: any) {
    this.byYear = [];
    this.byYear = this.placementByYear.filter((x: any) =>  x?.year == event?.value);
  }
}
