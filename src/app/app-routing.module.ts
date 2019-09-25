import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicGearLibraryComponent } from './music-gear-library/music-gear-library.component';

const routes: Routes = [
  { path: 'music-gear-library', component: MusicGearLibraryComponent },
  { path: '', component: MusicGearLibraryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
