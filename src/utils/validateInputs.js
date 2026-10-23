export const validateInputs = (inputs) => {
  for (const [key, value] of Object.entries(inputs)) {
    switch (key) {
      case "email":
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
          return "Please enter correct email";
        }
        break;

      case "password":
        if (
          !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(
            value,
          )
        ) {
          return "Please enter correct password format";
        }
        break;
      case "name":
        if (!/^[a-zA-Z\s]+$/.test(value.trim())) {
          return "Please enter valid name";
        }
        break;

      case "telephone":
        if (!/^\d{10,13}$/.test(value)) {
          return "Please enter valid mobile number";
        }
        break;

      default:
        break;
    }
  }
  return "";
};
