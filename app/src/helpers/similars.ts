/**
 * @description accepts two array and determine the equal values
 * @param first - first array to compare
 * @param second - second array to compare
 * @returns an array of the equalities between both passed arrays
 */
export function similars(first: any[], second: any[]): any[] {
  return first.filter(e => second.includes(e));
}
