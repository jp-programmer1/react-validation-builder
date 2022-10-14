const matches = ({ matches }, validation) => {

  if (matches.message && matches.message !== "") {
    return validation.matches(matches.regex, matches.message);
  } else {
    return validation.matches(matches.regex);
  }
}
export default matches;