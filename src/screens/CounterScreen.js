import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScren = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Text style={styles.textStyle}>Current count: {counter}</Text>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.buttonStyle}>
          <Button
            title="Increase"
            onPress={() => {
              setCounter(counter + 1);
              console.log(counter);
            }}
          />
        </View>
        <View style={styles.buttonStyle}>
          <Button
            title="Decrease"
            onPress={() => {
              if (counter > 0) {
                setCounter(counter - 1);
                console.log(counter);
              } else {
                console.log("You can't count below zero!");
              }
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
