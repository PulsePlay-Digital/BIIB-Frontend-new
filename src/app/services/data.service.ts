import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = environment.apiUrl;
  }

  /**
   * Function to Get all Data
   * @param action 
   * @returns 
   */
  getData(action?: any): Observable<any> {
    return this.http.get(`${this.url}/${action}`);
  }

  /**
   * Function to get Data By Id
   * @param action 
   * @param id 
   * @returns 
   */
  getDataById(action: any, id: number) {
    return this.http.get(`${this.url}/${action}/${id}`);
  }

  /**
   * Function to post data
   * @param action 
   * @param data 
   * @returns 
   */
  postData(action: any, data: any) {
    return this.http.post(`${this.url}/${action}`, data);
  }
  /**
   * Function to update all data
   * @param action 
   * @param data 
   * @returns 
   */
  update(action: any, data: any) {
    return this.http.put(`${this.url}/${action}/${data?.id}`, data);
  }
  /**
   * Function to delete all data by id
   * @param action 
   * @param data 
   * @returns 
   */
  delete(action?: string, id?: any): Observable<any> {
    return this.http.delete(`${this.url}/${action}/${id}`);
  }
}
