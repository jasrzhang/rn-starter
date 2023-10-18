import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  console.log(navigation);

  return (
    <View>
      <Text style={styles.text}>Hello Jason's World</Text>
      <Button
        title="Go to Components Demo"
        onPress={function () {
          navigation.navigate("Components");
        }}
      />
      <Button
        title="Go to List Demo"
        onPress={function () {
          navigation.navigate("List");
        }}
      />
      <Button
        title="Go to Image Demo"
        onPress={function () {
          navigation.navigate("Image");
        }}
      />
      <Button
        title="Go to Counter Demo"
        onPress={function () {
          navigation.navigate("Counter");
        }}
      />
      <Button
        title="Go to Color Demo"
        onPress={function () {
          navigation.navigate("Color");
        }}
      />
      <Button
        title="Go to Square Demo"
        onPress={function () {
          navigation.navigate("Square");
        }}
      />
      <Button
        title="Go to Text Demo"
        onPress={function () {
          navigation.navigate("Text");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
