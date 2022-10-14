const positive = ({ positive }, validation) => {
  if (positive.message && positive.message !== "") {
    return validation.positive(positive.message);
  } else {
    return validation.positive();
  }
}
export default positive;