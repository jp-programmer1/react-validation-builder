const url = ({ url }, validation) => {

  if (url.message && url.message !== "") {
    return validation.url(url.message);
  } else {
    return validation.url();
  }
}
export default url;