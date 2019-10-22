import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AffCompCenterService {

  private affComp: string =  'affDefaut';

  setComp(action) {
    this.affComp = action;
    return console.log(this.affComp);
  }

  getComp() {
    return this.affComp;
  }

  constructor() { }
}
