import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = function () {
  const greeting = "Hi there!";
  var greeting1 = <Text>Hello to you!</Text>;
  return (
    <View>
      <Text style={styles.textStyle}>This is the components screen</Text>
      <Text>{greeting}</Text>
      {greeting1}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentsScreen;
