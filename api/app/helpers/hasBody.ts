/**
 * Check if an object is empty
 * @param data object to check
 */
const hasBody: (data: object) => boolean = (
  data: Record<string, any>
): boolean => { 
  if ('query' in data) return false
  return Object.keys(data).length > 0
}

export default hasBody;
