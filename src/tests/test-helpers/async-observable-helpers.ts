import { defer } from 'rxjs';

// https://angular.io/guide/testing#async-observable-helpers

/**
 * Create async observable that emits-once and completes after a JS engine turn
 */
export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

/**
 * Create async observable error that errors after a JS engine turn
 */
export function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}
