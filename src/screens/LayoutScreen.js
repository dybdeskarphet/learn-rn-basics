import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View>
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle1}>Child #1</Text>
        <Text style={styles.textStyle2}>Child #2</Text>
        <Text style={styles.textStyle3}>Child #3</Text>
        <Text style={styles.textStyle4}>Child #4</Text>
      </View>
      <View style={styles.viewStyle2}>
        <Text style={styles.textStyle5}>Child #5</Text>
        <Text style={styles.textStyle6}>Child #6</Text>
        <Text style={styles.textStyle7}>Child #7</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: "black",
    height: 200,
    marginBottom: 20
  },
  textStyle1: {
    borderWidth: 2,
    flex: 1,
    borderColor: "red",
    alignSelf: "flex-start",
    left: 30,
    top: 100,
  },
  textStyle2: {
    borderWidth: 2,
    flex: 2,
    borderColor: "red",
    alignSelf: "center",
  },
  textStyle3: {
    borderWidth: 2,
    flex: 3,
    borderColor: "red",
    alignSelf: "flex-end",
    bottom: 50,
    right: 10,
  },
  textStyle4: {
    borderWidth: 2,
    fontSize: 20,
    borderColor: "red",
    position: "absolute",
    ...StyleSheet.absoluteFillObject,
    //      top: 0,
    //      bottom: 0,
    //      right: 0,
    //      left: 0
  },
  viewStyle2: {
    borderColor: "black",
    alignItems: "flex-start",
    justifyContent: "space-between",
    borderWidth: 2,
    height: 250,
    flexDirection: "row"
  },
  textStyle5: {
    borderWidth: 2,
    padding: 10,
    borderColor: "red",
  },
  textStyle6: {
    borderWidth: 2,
    padding: 10,
    // top: 50,
    marginTop: 50,
    borderColor: "red",
  },
  textStyle7: {
    borderWidth: 2,
    padding: 10,
    borderColor: "red",
  },
});

export default BoxScreen;
