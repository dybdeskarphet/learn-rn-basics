import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {

  return (
  <View>
    <TouchableOpacity style={styles.buttonStyle} onPress={() => 
    navigation.navigate("Components")
    }>
      <Text style={styles.textStyle}>Components Demo</Text> 
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonStyle} onPress={() => 
    navigation.navigate("List")
    }>
      <Text style={styles.textStyle}>List Demo</Text> 
    </TouchableOpacity>
  </View>
  )};

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 20,
    backgroundColor: '#4CAF50',
  },
  textStyle: {
      color: 'white',
      fontSize: 20
  }
});

export default HomeScreen;
