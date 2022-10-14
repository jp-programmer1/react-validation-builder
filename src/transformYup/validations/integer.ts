const integer = ({ integer }, validation) => {
  if (integer.message && integer.message !== "") {
    return validation.integer(integer.message);
  } else {
    return validation.integer();
  }
}
export default integer;