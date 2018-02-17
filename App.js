/**
 *
 * Input Validation tutorial Code
 *
 */

import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

import validateInput from "./libs/validation/validation";
import { FieldInput } from "./components/field-input";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      email_error: "",
      password: "",
      password_error: ""
    };
  }

  updateEmail = email => {
    this.setState({ email });
  };

  updatePassword = password => {
    this.setState({ password });
  };

  /**
   * Handles Field Validation
   *
   * @memberof SignupScreen
   * @param {string} field
   * @param {string} value
   * @param {string} error_field
   * @returns {object} New state
   */
  handleFieldError = (field, value, error_field) => {
    console.log("Handling Error", field, value, error_field);
    let result = validateInput(field, value);
    if (result === null) {
      let state = { [error_field]: "" };
      this.setState(state);
    } else {
      let state = { [error_field]: result };
      this.setState(state);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Input Validation Example</Text>
        <FieldInput
          placeholder="Email"
          updateText={input => this.updateEmail(input)}
          error={this.state.email_error}
          handleFieldError={() =>
            this.handleFieldError("email", this.state.email, "email_error")
          }
        />
        <FieldInput
          placeholder="Password"
          updateText={input => this.updatePassword(input)}
          error={this.state.password_error}
          handleFieldError={() =>
            this.handleFieldError(
              "password",
              this.state.password,
              "password_error"
            )
          }
          secure
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    padding: 20,
    fontSize: 22,
    color: "#525564"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "papayawhip",
    paddingHorizontal: 20
  }
});
