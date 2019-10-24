import { Component, OnInit } from '@angular/core';
import { AffCompCenterService } from 'src/app/shared/services/aff-comp-center.service';


@Component({
  selector: 'enjeu-affichage-chat',
  templateUrl: './affichage-chat.component.html',
  styleUrls: ['./affichage-chat.component.scss']
})
export class AffichageChatComponent implements OnInit {

  constructor(private affCompCenterService: AffCompCenterService) { }

  ngOnInit() {
  }

  affDefaut(): void {
    this.affCompCenterService.sendCompId("affDefaut");
  }

}
