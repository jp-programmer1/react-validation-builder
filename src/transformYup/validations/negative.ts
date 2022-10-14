const negative = ({ negative }, validation) => {
  if (negative.message && negative.message !== "") {
    return validation.negative(negative.message);
  } else {
    return validation.negative();
  }
}
export default negative;