const uuid = ({ uuid }, validation) => {

  if (uuid.message && uuid.message !== "") {
    return validation.uuid(uuid.message);
  } else {
    return validation.uuid();
  }
}
export default uuid;