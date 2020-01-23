import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MusicGearLibraryComponent} from './music-gear-library/music-gear-library.component';
import {TestComponent} from './test/test.component';
import {CartComponent} from './cart/cart.component';

const routes: Routes = [
  {path: 'music-gear-library', component: MusicGearLibraryComponent},
  {path: '', component: MusicGearLibraryComponent},
  {path: 'test', component: TestComponent},
  {path: 'cart', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
