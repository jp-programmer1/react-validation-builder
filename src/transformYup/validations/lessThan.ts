const lessThan = ({ lessThan }, validation) => {

  if (lessThan.message && lessThan.message !== "") {
    return validation.lessThan(lessThan.max, lessThan.message);
  } else {
    return validation.lessThan(lessThan.max);
  }
}
export default lessThan;