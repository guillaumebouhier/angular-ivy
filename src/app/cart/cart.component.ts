import { Component, OnInit } from '@angular/core';
import { CartQuery } from './cart.query';
import { Cart } from './cart.model';
import { GearQuery } from '../gear/gear.query';
import { Gear } from '../gear/gear.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  private items: Cart[];
  constructor(private cartQuery: CartQuery, private gearQuery: GearQuery) {}

  ngOnInit() {
    this.items = this.cartQuery.getAll();
    if (this.items.length === 0) {
      this.items.push({ id: 0 });
      this.items.push({ id: 1 });
      this.items.push({ id: 2 });
    }
  }

  public get Items(): Cart[] {
    return this.items;
  }

  public getGear(id: number): Gear {
    return this.gearQuery.getEntity(id);
  }
}
