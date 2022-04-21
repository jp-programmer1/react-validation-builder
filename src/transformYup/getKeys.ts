
import { getProperties } from './getProperties';

export const getKeys = (keys: Array<any>, values) => {
  let prop = "";
  let cont = keys.length - 1
  keys.forEach((k, index) => {
    let properties = `(${getProperties(values[k])})`;
    prop += `${k}${properties}${(index === cont) ? '' : '.'}`;
  });
  return prop;
}