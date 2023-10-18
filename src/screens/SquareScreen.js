import React, { useReducer } from "react";
import { View, StyleSheet, Text } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

//write reducer function prior to
const reducer = function (state, action) {
  // state === {red: number, green: number, blue:number}
  // action === {type: 'change_red' || 'change_green' || 'change_blue', playload: 15 || -15}
  switch (action.type) {
    case "change_red":
      // never change state property directly. don't do state.red = state.red + 15
      return state.red + action.playload > 255 ||
        state.red + action.playload < 0
        ? state
        : { ...state, red: state.red + action.playload };
    case "change_green":
      return state.green + action.playload > 255 ||
        state.green + action.playload < 0
        ? state
        : { ...state, green: state.green + action.playload };
    case "change_blue":
      return state.blue + action.playload > 255 ||
        state.blue + action.playload < 0
        ? state
        : { ...state, blue: state.blue + action.playload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 }); //(reducer, initialiser(state)))
  //desctructering
  const { red, green, blue } = state;
  console.log(state); //{red:0, green:0, blue:0} initial value of state

  return (
    <View>
      <ColorCounter
        color="red"
        onIncrease={() =>
          dispatch({ type: "change_red", playload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", playload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="blue"
        onIncrease={() =>
          dispatch({ type: "change_blue", playload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", playload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="green"
        onIncrease={() =>
          dispatch({ type: "change_green", playload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", playload: -1 * COLOR_INCREMENT })
        }
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
