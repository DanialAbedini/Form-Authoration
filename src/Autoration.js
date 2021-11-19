export const validate = (data, type) => {
  const error = {};
  if (type === "signup") {
    //name
    if (!data.name.trim()) {
      error.name = "Enter Your Name";
    } else delete error.name;
    //confirmPassword
    if (!data.confirmPassword) {
      error.confirmPassword = "Enter Your password";
    } else if (data.confirmPassword !== data.password) {
      error.confirmPassword = "password does not match";
    } else delete error.confirmPassword;

    //check
    if (!data.isAccepted) {
      error.isAccepted = "pls accept our agrement";
    } else delete error.isAccepted;
  }

  //email
  if (!data.email) {
    error.email = "Enter Your Email";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    error.email = "Enter correct email";
  } else delete error.email;

  //password
  if (!data.password) {
    error.password = "Enter Your password";
  } else if (data.password.length < 6) {
    error.password = "password Must Be At lease 6 Character";
  } else delete error.password;

  return error;
};
