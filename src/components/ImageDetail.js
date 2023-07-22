import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Image source={props.source} style={styles.imageStyle} />
      <Text style={styles.textStyle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    margin: 10,
    padding: 6,
  },
  imageStyle: {
    height: 200,
    width: 200,
    borderRadius: 20,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 3,
  }
});

export default ImageDetail;
