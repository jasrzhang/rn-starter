import react from "react";
import { Text, StyleSheet, View } from "react-native";

const ExcerciseScreen = function () {
  const greeting = "Getting started with react native!";
  const name = <Text style={styles.nameTextStyle}>My name is Jason</Text>;
  return (
    <View>
      <Text style={styles.textStyle}>{greeting}</Text>
      {name}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  nameTextStyle: {
    fontSize: 20,
  },
});

export default ExcerciseScreen;
