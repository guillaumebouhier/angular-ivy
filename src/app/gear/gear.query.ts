import { Query } from "@datorama/akita";
import { GearState, GearStore } from "../stores/gear-store/gear.store";

export class GearQuery extends Query<GearState> {
  constructor(protected store: GearStore) {
    super(store);
  }
}
