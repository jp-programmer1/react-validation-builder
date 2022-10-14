const required = ({ required }, validation) => {
  if (required.message && required.message !== "") {
   return validation.required(required.message);
  } else {
    return validation.required();
  }
}
export default required;