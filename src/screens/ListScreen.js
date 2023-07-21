import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const authors = [
    { name: "M. P. Shiel", age: 20 },
    { name: "William Golding", age: 20 },
    { name: "Susan Beth Pfeffer", age: 20 },
    { name: "John Steinbeck", age: 20 },
    { name: "Ally Condie", age: 20 },
    { name: "Rick Yancey", age: 20 },
    { name: "Amos Kenan", age: 20 },
    { name: "William S. Burroughs", age: 20 },
    { name: "David Foster Wallace", age: 20 },
    { name: "Noël Coward", age: 20 },
    { name: "Angus Wilson", age: 20 },
    { name: "Robert Hugh Benson", age: 20 },
    { name: "Suzanne Collins", age: 20 },
    { name: "Terrance Dicks", age: 20 },
    { name: "Michel Houellebecq", age: 20 },
    { name: "E. M. Forster", age: 20 },
    { name: "Frank M. Robinson", age: 20 },
    { name: "William Hope Hodgson", age: 20 },
    { name: "Phillip Wylie", age: 20 },
    { name: "Samuel Butler", age: 20 },
    { name: "Neal Shusterman", age: 20 },
    { name: "Stanisław Lem", age: 20 },
    { name: "Dimitris Lyacos", age: 20 },
    { name: "Ayn Rand", age: 20 },
    { name: "Dave Eggers", age: 20 },
    { name: "James Howard Kunstler", age: 20 },
    { name: "Scott Westerfeld", age: 20 },
  ];

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(author) => author.name}
      data={authors}
      renderItem={({ item }) => {
        return <View>
            <Text style={styles.headerStyle}>{item.name}</Text> 
            <Text style={styles.descStyle}>Age: {item.age}</Text>
        </View>
      }}
    />
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 10,
    marginTop: 10,
  },
  descStyle: {
    fontSize: 15,
    marginHorizontal: 10,
    marginBottom: 10,
  },
});

export default ListScreen;
