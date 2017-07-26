import {
  RouterStateSerializer,
  RouterStateSnapshotType,
} from '@ngrx/router-store';

/**
 * The RouterStateSerializer takes the current RouterStateSnapshot
 * and returns any pertinent information needed. The snapshot contains
 * all information about the state of the router at the given point in time.
 * The entire snapshot is complex and not always needed. In this case, you only
 * need the URL from the snapshot in the store. Other items could be
 * returned such as route parameters, query parameters and static route data.
 */
export class CustomRouterStateSerializer implements RouterStateSerializer {
  serialize(routerState: RouterStateSnapshotType): RouterStateSnapshotType {
    const url = routerState ? routerState.url : undefined;

    return { url };
  }
}
