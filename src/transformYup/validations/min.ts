const min = ({ min }, validation) => {

  if (min.message && min.message !== "") {
    return validation.min(min.limit, min.message);
  } else {
    return validation.min(min.limit);
  }
}
export default min;