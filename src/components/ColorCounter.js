
import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ColorCounter = ( { color, onIncrease, onDecrease } ) => {
  return (
      <View>
        <Text style={styles.headerStyle}>{color}</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => onIncrease()}
        >
          <Text style={styles.textStyle}>Increase {color}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => onDecrease()}
        >
          <Text style={styles.textStyle}>Decrease {color}</Text>
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 10,
    borderRadius: 20,
    backgroundColor: "#4CAF50",
    shadowRadius: 10,
    shadowOpacity: 100,
  },
  textStyle: {
    color: "white",
    fontSize: 20,
  },
headerStyle: {
    color: "black",
    fontSize: 20
}
});

export default ColorCounter;
