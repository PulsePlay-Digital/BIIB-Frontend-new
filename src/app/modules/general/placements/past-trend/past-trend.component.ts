import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-past-trend',
  templateUrl: './past-trend.component.html',
  styleUrls: ['./past-trend.component.scss']
})
export class PastTrendComponent implements OnInit{
  pastYear: Array<any> = [
    { id: 1, year: "2020-2022", std_name: 'New age', cmp_name: "HCL" },
    { id: 6, year: "2020-2022", std_name: 'New Ak', cmp_name: "HCL 1" },
    { id: 2, year: "2019-2021", std_name: 'twenty age', cmp_name: "IBM" },
    { id: 4, year: "2019-2021", std_name: 'Note 201', cmp_name: "ICL" },
    { id: 3, year: "2018-2020", std_name: 'Note', cmp_name: "Wipro" },
    { id: 5, year: "2018-2020", std_name: 'Note 22', cmp_name: "Wipro 1" },
    { id: 5, year: "2018-2022", std_name: 'Note 22 tesrt', cmp_name: "SAIL" }
  ];
  byYear: Array<any> = [];
  years: Array<any> = [{ year: "2018-2020" }, { year: "2019-2021" }, { year: "2020-2022" }];
  ngOnInit() {

  }
  onSelectYear(event: any) {
    this.byYear = [];
    this.byYear = this.pastYear.filter((x: any) =>  x?.year == event?.value);
  }
}
