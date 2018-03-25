import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NavbarService {
  private resourceUrl :string;
  
  constructor(private http: HttpClient) {
   this.resourceUrl='/assets/menu.json';
  }

  
  loadMenu(): Observable<any> {    
    return this.http.get<any>(`${this.resourceUrl}`);
  }

}
