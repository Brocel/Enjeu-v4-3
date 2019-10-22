import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AffCompCenterService {

  affComp: string =  'affDefaut';

  setComp(action) {
    this.affComp = action;
  }

  getComp() {
    console.log(this.affComp);
    return this.affComp;
  }

  constructor() { }
}
