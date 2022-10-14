const email = ({ email }, validation) => {

  if (email.message && email.message !== "") {
    return validation.email(email.message);
  } else {
    return validation.email();
  }
}
export default email;