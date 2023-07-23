import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";

const ColorScreen = () => {
  //  const generateColor = () => {
  //    const randomColor = Math.floor(Math.random() * 16777215)
  //      .toString(16)
  //      .padStart(6, "0");
  //    return `#${randomColor}`;
  //  };

  const [colors, setColors] = useState([]);
  console.log(colors)

  const randomRgb = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
  };

  return (
    <View>

      <View style={styles.buttonStyle}>
        <Button
          style={styles.buttonStyle}
          title="Generate a color"
          onPress={() => {
            setColors([...colors, randomRgb()])
          }}
        />
      </View>

      <FlatList
      keyExtractor={(item) => item}
      data={colors}
      renderItem={({ item }) => {
        return (
          <View style={{ height: 100, width: 100, backgroundColor: item }}/>
        );
      }}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    margin: 10,
  },
});

export default ColorScreen;
