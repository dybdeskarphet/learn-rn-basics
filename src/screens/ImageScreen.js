import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";
import { FlatList, ScrollView } from "react-native-gesture-handler";

const ImageScreen = () => {
  return (
    <ScrollView>
      <ImageDetail
        title="Hibiscus miniatus semi-plenus"
        source={require("../../assets/hibiscus-miniatus-semi-plenus.jpg")}
      />
      <ImageDetail
        title="Mimulus moschatus Harrison II"
        source={require("../../assets/mimulus-moschatus-harrison-ii.jpg")}
      />
      <ImageDetail
        title="Plate 114"
        source={require("../../assets/plate-114.jpg")}
      />
      <ImageDetail
        title="Plate 158"
        source={require("../../assets/plate-158.jpg")}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
