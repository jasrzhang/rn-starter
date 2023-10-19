import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = function () {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textStyle: {
    borderWidth: 3,
    borderColor: "red",
  },
  textOneStyle: {
    height: 100,
    borderWidth: 3,
    borderColor: "red",
  },
  textTwoStyle: {
    height: 100,
    borderWidth: 3,
    borderColor: "red",
    fontSize: 18,
    alignSelf: "flex-end",
  },
  textThreeStyle: {
    height: 100,
    borderWidth: 3,
    borderColor: "red",
  },
});

export default BoxScreen;
