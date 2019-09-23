import { Injectable } from '@angular/core';
import { GearStore } from './gear.store';

@Injectable({
  providedIn: 'root'
})
export class GearService {
  constructor(private gearStore: GearStore) {}

  get GearStore() {
    return this.gearStore;
  }
}
