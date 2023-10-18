import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = function () {
  const [name, setName] = useState("");
  const [pwd, setPassword] = useState("");

  return (
    <View>
      <View>
        <Text>Enter Name:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          value={name}
          placeholder="enter your name"
          onChangeText={(newValue) => {
            setName(newValue);
          }}
        />
        <Text>My name is {name}</Text>
      </View>
      <View>
        <Text>Enter your password</Text>
        <TextInput
          style={styles.input}
          placeholder="your passwor should be longer than 5 characters"
          value={pwd}
          onChangeText={(newPwd) => {
            setPassword(newPwd);
          }}
        />
        {pwd.length > 5 || pwd.length == 0 ? null : (
          <Text style={{ color: "red" }}>
            Password must be longer than 5 characters
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
