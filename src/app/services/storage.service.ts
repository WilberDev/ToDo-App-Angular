import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  //This (JSON.parse) allows me to turn back data from Object Notation string to an Array:
  getData(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }
  //This turns from Array to Object Notation string
  setData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  constructor() { }
}
