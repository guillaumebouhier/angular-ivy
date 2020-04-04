import { Component } from '@angular/core';
import { CartService } from './cart/cart.service';
import { CartQuery } from './cart/cart.query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my ivy app';
  constructor(private cartService: CartService, private cartQuery: CartQuery) { }

  public get CartService() {
    return this.cartService;
  }

  /**
   *
   */
  public get cartCount(): number {
    return this.cartQuery.getCount();
  }

  public voted() {
    console.log('voted');
  }
}
