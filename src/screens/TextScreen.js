import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Name"
        value={name}
        onChangeText={(newValue) => {
          setName(newValue);
        }}
      />
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Surname"
        value={surname}
        onChangeText={(newValue) => {
          setSurname(newValue);
        }}
      />

      <Text style={styles.text}>
        My name is {name}
        {"\n"}
        And my surname is {surname}
      </Text>

      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={(newValue) => {
          setPassword(newValue);
        }}
      />

      
      <Text style={styles.text}>
        {password.length > 5 ? null : <Text>Password must be longer than 5 characters</Text>}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 13,
    padding: 8,
    borderColor: "black",
    borderWidth: 1,
  },
  text: {
    fontSize: 20,
  },
});

export default TextScreen;
