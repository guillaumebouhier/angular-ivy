import { Gear } from "../../models/gear.model";
import { EntityState, EntityStore, StoreConfig } from "@datorama/akita";

export interface GearsState extends EntityState<Gear> {
  filter: string;
}

@StoreConfig({ name: "gears" })
export class GearsStore extends EntityStore<GearsState> {
  constructor() {
    super({ filter: "ALL" });
  }
}
