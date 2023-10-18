import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = function (state, action) {
  //state == count:number
  //action =={type:'increment' || 'decrement' , playload:1 || -1}
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + action.playload };
    case "decrement":
      return { ...state, counter: state.counter - action.playload };
    default:
      return state;
  }
};

const CounterScreen = function () {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          // Don't do this
          //   counter++;
          dispatch({ type: "increment", playload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          // Don't do this
          //   counter--;
          dispatch({ type: "decrement", playload: 1 });
        }}
      />
      <Text>Current Counter: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
