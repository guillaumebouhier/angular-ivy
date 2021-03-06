import { Injectable } from '@angular/core';
import { CartStore } from './cart.store';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private cartStore: CartStore) {}

  get CartStore() {
    return this.cartStore;
  }
}
