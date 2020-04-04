import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

import { GearService } from '../gear/gear.service';
import { GearQuery } from '../gear/gear.query';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-music-gear-library',
  templateUrl: './music-gear-library.component.html',
  styleUrls: ['./music-gear-library.component.scss'],
})
export class MusicGearLibraryComponent {
  /** Based on the screen size, switch from standard to one column per row */

  public cards;
  public teststr: string;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private gearQuery: GearQuery,
    private gearService: GearService,
    private cartService: CartService
  ) {
    const isLoading = this.gearQuery.selectLoading();
    isLoading.subscribe(loading => {
      console.log('Loading: ' + loading);
    });

    const values = this.gearQuery.selectAll({
      asObject: true,
    });
    const select = this.gearQuery.select();

    isLoading.subscribe(loading => {
      console.log('Loading: ' + loading);
    });

    values.subscribe(val => {
      console.log('Values: ');
      console.log(val);
    });

    const store = this.Store;

    const cardsArray = [];
    store.forEach(entity => {
      cardsArray.push({
        id: entity.id,
        title: entity.brand,
        model: entity.model,
        imageUrl: entity.imageUrl,
        cols: 1,
        rows: 1,
      });
    });
    this.cards = cardsArray;
  }

  public get Cards() {
    return this.cards;
  }

  public get Store() {
    return this.gearQuery.getAll();
  }

  public addToCart(gearId: number) {
    this.cartService.CartStore.add({
      id: gearId,
    });
  }
}
