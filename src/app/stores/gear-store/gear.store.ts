import { Gear } from "../../models/gear.model";
import { EntityState, EntityStore, StoreConfig } from "@datorama/akita";

export interface GearState extends EntityState<Gear> {
  filter: string;
}

@StoreConfig({ name: "gears" })
export class GearStore extends EntityStore<GearState> {
  constructor() {
    super({ filter: "ALL" });
  }
}
