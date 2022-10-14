const MESSAGE_DEFAULT = 'the field accepts uppercase';
const regex = /^[A-Z\s]+$/g;

const uppercase = ({ uppercase }, validation) => {
  if (uppercase.message && uppercase.message !== "") {
    return validation.matches(regex, uppercase.message);
  } else {
    return validation.matches(regex, MESSAGE_DEFAULT);
  }
}
export default uppercase;