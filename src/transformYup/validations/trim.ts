const MESSAGE_DEFAULT = "the field no containig spaces";
const regex = /^[A-Za-z0-9]+$/g;

const trim = ({ trim }, validation) => {
  if (trim.message && trim.message !== "") {
    return validation.matches(regex, trim.message);
  } else {
    return validation.matches(regex, MESSAGE_DEFAULT);
  }
}
export default trim;