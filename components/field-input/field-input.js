import React from "react";
import PropTypes from "prop-types";
import { View, TextInput, Text, StyleSheet } from "react-native";

const FieldInput = ({
  placeholder,
  text,
  updateText,
  error,
  handleFieldError,
  secure
}) => {
  return (
    <View style={{ width: "100%", marginBottom: 20 }}>
      <View style={styles.container}>
        <TextInput
          style={{ width: "100%" }}
          placeholder={placeholder}
          autoCorrect={false}
          onChangeText={text => updateText(text)}
          onBlur={handleFieldError ? () => handleFieldError() : null}
          value={text}
          secureTextEntry={secure}
        />
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#96C0CE"
  },
  error: {
    fontSize: 14,
    color: "red"
  }
});
FieldInput.propTypes = {
  updateText: PropTypes.func,
  placeholder: PropTypes.string,
  text: PropTypes.string,
  error: PropTypes.string,
  handleFieldError: PropTypes.func
};

export default FieldInput;
