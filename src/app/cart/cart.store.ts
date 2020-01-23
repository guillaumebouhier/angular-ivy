import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";
import { EntityState, EntityStore, StoreConfig } from "@datorama/akita";

export interface CartState extends EntityState<Cart> { }

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: "cart" })
export class CartStore extends EntityStore<CartState> {
  constructor() {
    super();
  }
}
