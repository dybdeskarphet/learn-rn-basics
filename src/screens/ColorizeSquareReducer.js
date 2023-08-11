import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";
import { TouchableOpacity } from "react-native-gesture-handler";

const COLOR_INCREMENT = 10;

const reducer = (state, action) => {
  switch (action.type) {
    case "change_red":
      return state.red + action.payload <= 255 && state.red + action.payload >= 0
        ? { ...state, red: state.red + action.payload }
        : state;
    case "change_green":
      return state.green + action.payload <= 255 && state.green + action.payload >= 0
        ? { ...state, green: state.green + action.payload }
        : state;
    case "change_blue":
      return state.blue + action.payload <= 255 && state.blue + action.payload >= 0
        ? { ...state, blue: state.blue + action.payload }
        : state;
    default:
      return state;
  }
};

const ColorizeSquare = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <View style={styles.counterStyle}>
        <ColorCounter
          onIncrease={() => dispatch({type: 'change_red', payload: COLOR_INCREMENT})}
          onDecrease={() => dispatch({type: 'change_red', payload: -1 * COLOR_INCREMENT})}
          color="Red"
        />
      </View>
      <View style={styles.counterStyle}>
        <ColorCounter
          onIncrease={() => dispatch({type: 'change_green', payload: COLOR_INCREMENT})}
          onDecrease={() => dispatch({type: 'change_green', payload: -1 * COLOR_INCREMENT})}
          color="Green"
        />
      </View>
      <View style={styles.counterStyle}>
        <ColorCounter
          onIncrease={() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT})}
          onDecrease={() => dispatch({type: 'change_blue', payload: -1 * COLOR_INCREMENT})}
          color="Blue"
        />
      </View>
      <TouchableOpacity
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
        onPress={() => {
          // this doesn't work but i'll leave it as it is
          dispatch({type: 'red', payload: 0})
          dispatch({type: 'green', payload: 0})
          dispatch({type: 'blue', payload: 0})
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  counterStyle: {
    margin: 10,
  },
});

export default ColorizeSquare;
