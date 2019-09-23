import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

import { GearService } from '../gear/gear.service';
import { GearQuery } from '../gear/gear.query';
import { Gear } from '../gear/gear.model';

@Component({
  selector: 'app-music-gear-library',
  templateUrl: './music-gear-library.component.html',
  styleUrls: ['./music-gear-library.component.scss']
})
export class MusicGearLibraryComponent {
  /** Based on the screen size, switch from standard to one column per row */

  constructor(
    private breakpointObserver: BreakpointObserver,
    private gearQuery: GearQuery,
    private gearService: GearService
  ) {
    const isLoading = this.gearQuery.selectLoading();
    isLoading.subscribe(loading => {
      console.log('Loading: ' + loading);
    });

    const values = this.gearQuery.selectAll({
      asObject: true
    });
    const select = this.gearQuery.select();

    isLoading.subscribe(loading => {
      console.log('Loading: ' + loading);
    });

    values.subscribe(val => {
      console.log('Values: ');
      console.log(val);
    });
  }

  public get Cards() {
    const store = this.Store;
    const cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(({ matches }) => {
        let columns = 0;
        if (matches) {
          columns = 2;
        } else {
          columns = 1;
        }

        const cardsArray = [];
        store.forEach(entity => {
          cardsArray.push({
            title: entity.brand,
            model: entity.model,
            imageUrl: entity.imageUrl,
            cols: columns,
            rows: 1
          });
        });
        return cardsArray;
      })
    );
    return cards;
  }

  public get Store() {
    return this.gearQuery.getAll();
  }
}
