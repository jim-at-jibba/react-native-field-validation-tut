export const fieldContraints = {
  firstName: {
    presence: {
      message: "^Please enter your first name",
      allowEmpty: false
    }
  },
  lastName: {
    presence: {
      message: "^Please enter your last name",
      allowEmpty: false
    }
  },
  email: {
    presence: {
      message: "^Please enter an email address",
      allowEmpty: false
    },
    email: {
      message: "^Please enter a valid email address"
    }
  },
  password: {
    presence: {
      message: "^Please enter your password",
      allowEmpty: false
    },
    length: {
      minimum: 6,
      tooShort: "^Please ensure your password is more than 6 characters"
    }
  }
};
