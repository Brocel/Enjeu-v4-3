import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AffCompCenterService {

  private subject = new Subject<any>();

    sendCompId(compId: string) {
      this.subject.next(compId);
    }

    clearCompId() {
      this.subject.next();
    }

    getCompId(): Observable<any> {
      return this.subject.asObservable();
    }

  constructor() { }


}
