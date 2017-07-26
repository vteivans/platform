import { RouterStateSnapshot } from '@angular/router';

export type RouterStateSnapshotType =
  | RouterStateSnapshot
  | Partial<RouterStateSnapshot>;

export abstract class RouterStateSerializer {
  abstract serialize(routerState: RouterStateSnapshotType | null): RouterStateSnapshotType | null;
}

export class DefaultRouterStateSerializer implements RouterStateSerializer {
  serialize(routerState: RouterStateSnapshotType | null): RouterStateSnapshotType | null {
    return routerState;
  }
}
