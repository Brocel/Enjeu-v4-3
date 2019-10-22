import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AffCompCenterService {

  private affComp: string =  'affDefaut';

  getAffComp() {
    return this.affComp;
  }



  constructor() { }
}
