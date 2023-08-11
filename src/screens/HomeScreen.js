import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Components")}
      >
        <Text style={styles.textStyle}>Components Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("List")}
      >
        <Text style={styles.textStyle}>List Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Image")}
      >
        <Text style={styles.textStyle}>Image Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Counter")}
      >
        <Text style={styles.textStyle}>Counter Demo</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Color")}
      >
        <Text style={styles.textStyle}>Color Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("ColorizeSquare")}
      >
        <Text style={styles.textStyle}>Colorize Square Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("ColorizeSquareReducer")}
      >
        <Text style={styles.textStyle}>Colorize Square with Reducer Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

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
});

export default HomeScreen;
