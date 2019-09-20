import { GearStore } from "../stores/gear-store/gear.store";
import { tap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

export class SessionService {
  constructor(private sessionStore: GearStore, private http: HttpClient) {}

  login(creds) {
    return this.http.login(creds).pipe(
      tap(user => {
        this.sessionStore.update(user);
      })
    );
  }
}
