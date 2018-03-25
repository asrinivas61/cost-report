import { Component, OnInit } from '@angular/core';

import { CostReportTableService } from './cost-report-table.service';

@Component({
  selector: 'app-cost-report-table',
  templateUrl: './cost-report-table.component.html',
  styleUrls: ['./cost-report-table.component.css'],
  providers: [CostReportTableService]
})
export class CostReportTableComponent implements OnInit {
	options: Object;
  chart: Object;
 	columns: Array<any>;
  rows: Array<any>=[];
 	page: number = 1;
 	pageSize: number = 10;
 	start: number;
  end: number;
	isLoaded: boolean;

  constructor(
  	private costReportService: CostReportTableService
  ) {
  	this.options = {
      title : { text : 'Cost report chart' },
      series: [],
      chart: {
	      width: 1290,
	      height: 300
      }
    };
  }

  saveChart(chart) {
    this.chart = chart;
  }

  ngOnInit() {
  	this.loadGraphData();
  	this.loadtableData();
  }

  loadGraphData() {
  	this.isLoaded=false;
  	this.costReportService.getData()
  				.subscribe(data=>{
  					this.isLoaded=true;
  					this.options["series"]=data;
  					console.log(this.options);
  				})
  }

  loadtableData() {
  	this.costReportService.getTableData()
  				.subscribe(data=>{
  					
  				})
  }

  getPagedRows(rows): Array<any> {
    let start: number = (this.page - 1) * this.pageSize;
    let end: number = start + this.pageSize;
    this.start = start;
    if(this.rows&&(end>this.rows.length)) this.end = this.rows.length;
    else this.end = end;
    return rows.slice(start, end);
    
  }

  nextPage() {
    if (this.page != this.getLastPage())
      this.page += 1;
  }

  previousPage() {
    if (this.page > 1)
      this.page -= 1;
  }

  lastPage() {
    this.page = this.getLastPage();
  }

  getLastPage(): number {
    return Math.ceil(this.rows.length / this.pageSize)
  }

  listOfPages() {
    let arr = [];
    let i = 1;

    if (this.page > 5) {
      i = this.page - 3;
    }
    for (i; i < this.page + 5; i++) {
      if (i <= this.getLastPage())
        arr.push(i);
    }
    return arr;
  }

}
