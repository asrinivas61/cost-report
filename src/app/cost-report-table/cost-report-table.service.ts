import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CostReportTableService {
	private resourceUrl: string;
	private resourceTableUrl: string;
  
  constructor(private http: HttpClient) {
   this.resourceUrl='/assets/graph.json';
   this.resourceTableUrl = '/assets/table.json';
  }
  
  getData(): Observable<any> {    
    return this.http.get<any>(`${this.resourceUrl}`);
  }

  getTableData(): Observable<any> {
  	return this.http.get<any>(`${this.resourceTableUrl}`);
  }
}
