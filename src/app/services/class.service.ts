import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor() { }

  async createClass(data:any) {
    return {
      status:true,
      message:'Class creation failed'
    };
  }
}
