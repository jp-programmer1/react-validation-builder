const max = ({ max }, validation) => {

  if (max.message && max.message !== "") {
    return validation.max(max.limit, max.message);
  } else {
    return validation.max(max.limit);
  }
}
export default max;