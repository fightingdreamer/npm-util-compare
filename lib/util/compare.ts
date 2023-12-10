/**
  Compare two values.
  @returns -1, 0, +1
*/
export function compareAny<T>(a: T, b: T): number {
  if (a < b) return -1;
  if (b < a) return +1;
  return 0;
}

/**
  Compare two values in reversed order.
  @returns +1, 0, -1
*/
export function compareAnyReversed<T>(a: T, b: T): number {
  if (a < b) return +1;
  if (b < a) return -1;
  return 0;
}

/**
  Compare property of two objects.
  @returns +1, 0, -1
*/
export function compareProps<T>(name: keyof T): typeof compareAny<T> {
  return (a: T, b: T) => compareAny(a[name], b[name]);
}

/**
  Compare property of two objects in reversed order.
  @returns +1, 0, -1
*/
export function comparePropsReversed<T>(
  name: keyof T,
): typeof compareAnyReversed<T> {
  return (a: T, b: T) => compareAnyReversed(a[name], b[name]);
}
