import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, counter: state.counter + action.payload };
    case "decrease":
      return state.counter - action.payload >= 0
        ? { ...state, counter: state.counter - action.payload }
        : state;
    default:
      return state;
  }
};

const CounterScren = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;

  return (
    <View>
      <Text style={styles.textStyle}>Current count: {counter}</Text>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.buttonStyle}>
          <Button
            title="Increase"
            onPress={() => {
              dispatch({ type: "increase", payload: 1 });
            }}
          />
        </View>
        <View style={styles.buttonStyle}>
          <Button
            title="Decrease"
            onPress={() => {
              dispatch({ type: "decrease", payload: 1 });
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    margin: 10,
  },
  buttonStyle: {
    padding: 5,
    height: 300,
    width: 150,
  },
});

export default CounterScren;
