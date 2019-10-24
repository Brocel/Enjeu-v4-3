import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AffCompCenterService } from 'src/app/shared/services/aff-comp-center.service';

@Component({
  selector: 'enjeu-table-affichage',
  templateUrl: './table-affichage.component.html',
  styleUrls: ['./table-affichage.component.scss']
})
export class TableAffichageComponent implements OnDestroy {

  affComp:string;
  subscription: Subscription;

  constructor(private affCompCenterService: AffCompCenterService) {
    // subscribe to right element component compIds
    this.subscription = this.affCompCenterService.getCompId().subscribe(
      (compId) => {
        if (compId) {
          this.affComp = compId;
          console.log('tableAff : '+this.affComp);
        } else {
          // clear compIds when empty compId received
          this.affComp = "affDefaut";
        }
      },
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
       this.subscription.unsubscribe();
  }

}
