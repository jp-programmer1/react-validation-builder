const moreThan = ({ moreThan }, validation) => {

  if (moreThan.message && moreThan.message !== "") {
    return validation.moreThan(moreThan.min, moreThan.message);
  } else {
    return validation.moreThan(moreThan.min);
  }
}
export default moreThan;