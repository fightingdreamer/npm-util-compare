/**
 * Compare two values.
 * @returns -1, 0, +1
 */
export function compare<T>(a: T, b: T): number {
  if (a < b) return -1;
  if (b < a) return +1;
  return 0;
}

/**
 * Compare two values in reversed order.
 * @returns +1, 0, -1
 */
export function compareReversed<T>(a: T, b: T): number {
  if (a < b) return +1;
  if (b < a) return -1;
  return 0;
}

/**
 * Compare property of two objects.
 * @returns (a, b) => +1, 0, -1
 */
export function compareFromProperty<T>(name: keyof T): typeof compare<T> {
  return (a: T, b: T) => compare(a[name], b[name]);
}

/**
 * Compare property of two objects in reversed order.
 * @returns (a, b) => +1, 0, -1
 */
export function compareFromPropertyReversed<T>(
  name: keyof T,
): typeof compareReversed<T> {
  return (a: T, b: T) => compareReversed(a[name], b[name]);
}

/**
 * Compare two objects using custom function.
 * @returns (a, b) => +1, 0, -1
 */
export function compareFromFunction<T, V>(
  callbackFn: (value: T) => V,
): typeof compare<T> {
  return (a: T, b: T) => compare(callbackFn(a), callbackFn(b));
}

/**
 * Compare two objects using custom function in reversed order.
 * @returns (a, b) => +1, 0, -1
 */
export function compareFromFunctionReversed<T, V>(
  callbackFn: (value: T) => V,
): typeof compare<T> {
  return (a: T, b: T) => compareReversed(callbackFn(a), callbackFn(b));
}
