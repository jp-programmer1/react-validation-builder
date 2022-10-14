
import required from './required';
import min from './min';
import max from './max';
import matches from './matches';
import email from './email';
import url from './url';
import uuid from './uuid';
import trim from './trim';
import lowercase from './lowercase';
import uppercase from './uppercase';
import lessThan from './lessThan';
import moreThan from './moreThan';
import positive from './positive';
import negative from './negative';
import integer from './integer';
import expression from './expression';

const validations = {
  "required": required,
  "min": min,
  "max": max,
  "matches": matches,
  "email": email,
  "url": url,
  "uuid": uuid,
  "trim": trim,
  "lowercase": lowercase,
  "uppercase": uppercase,
  "lessThan": lessThan,
  "moreThan": moreThan,
  "positive": positive,
  "negative": negative,
  "integer": integer,
  "expression": expression
}

export default validations;