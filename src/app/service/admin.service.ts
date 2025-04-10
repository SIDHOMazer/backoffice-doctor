import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpclient:HttpClient) { }
  getAllAdmins(){
    return this.httpclient.get<Admin[]>(
      'http://localhost:8082/api/arsii/admin'
    );
}
}
