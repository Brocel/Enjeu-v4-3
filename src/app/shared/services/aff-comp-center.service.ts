import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AffCompCenterService {

  private subject = new BehaviorSubject<any>();

    sendCompId(compId: string) {
      this.subject.next({ text: compId });
    }

    clearCompId() {
      this.subject.next();
    }

    getCompId(): Observable<any> {
      return this.subject.asObservable();
    }

  constructor() { }


}
