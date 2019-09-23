import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { GearState, GearStore } from './gear.store';

@Injectable({
  providedIn: 'root'
})
export class GearQuery extends QueryEntity<GearState> {
  constructor(protected store: GearStore) {
    super(store);
  }
}
