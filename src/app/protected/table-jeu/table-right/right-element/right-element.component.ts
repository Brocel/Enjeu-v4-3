import { Component, Input, Output} from '@angular/core';
import { AffCompCenterService } from 'src/app/shared/services/aff-comp-center.service';

@Component({
  selector: 'enjeu-right-element',
  templateUrl: './right-element.component.html',
  styleUrls: ['./right-element.component.scss']
})
export class RightElementComponent {

  @Input() title: string;
  @Input() description: string;
  @Input() bouton: string;
  @Input() action: string;//string action onclic bouton (affDefaut, affDétails, etc.)

  constructor(private affCompCenterService: AffCompCenterService) {}

  sendCompId(): void {
    // send compId to subscribers via observable subject
        this.affCompCenterService.sendCompId(this.action);
  }
  clearCompId(): void {
        // clear messages
        this.affCompCenterService.clearCompId();
    }

}
