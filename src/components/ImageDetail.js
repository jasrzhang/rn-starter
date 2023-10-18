import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = function (props) {
  console.log(props);
  return (
    <View>
      <Image source={props.imageSource} />
      <Text>{props.title}</Text>
      <Text>Image Score - {props.score}</Text>
    </View>
  );
};

const stlles = StyleSheet.create({});

export default ImageDetail;
