import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AffCompCenterService {

  private dataSource = new BehaviorSubject({affComp: 'affDefaut'});
  currentData = this.dataSource.asObservable();

  changeData(data: any) {
    this.dataSource.next(data);
  }



  constructor() { }
}
