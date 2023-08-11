import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";
import { TouchableOpacity } from "react-native-gesture-handler";

const ColorizeSquare = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const COLOR_INCREMENT = 10;

  const setColor = (color, change) => {
    let colorLowercase = color.toLowerCase();

    if (
      eval(colorLowercase) + change <= 255 &&
      eval(colorLowercase) + change >= 0
    ) {
      eval("set" + color + "(" + colorLowercase + "+ change);");
    }
  };

  return (
    <View>
      <View style={styles.counterStyle}>
        <ColorCounter
          onIncrease={() => setColor("Red", COLOR_INCREMENT)}
          onDecrease={() => setColor("Red", -COLOR_INCREMENT)}
          color="Red"
        />
      </View>
      <View style={styles.counterStyle}>
        <ColorCounter
          onIncrease={() => setColor("Green", COLOR_INCREMENT)}
          onDecrease={() => setColor("Green", -COLOR_INCREMENT)}
          color="Green"
        />
      </View>
      <View style={styles.counterStyle}>
        <ColorCounter
          onIncrease={() => setColor("Blue", COLOR_INCREMENT)}
          onDecrease={() => setColor("Blue", -COLOR_INCREMENT)}
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
          setRed(255);
          setGreen(255);
          setBlue(255);
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
