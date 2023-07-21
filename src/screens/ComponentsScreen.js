import React from "react";
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    const userName = "Ahmet Arda Kavakcı";

    return <View>
    <Text style={styles.headerStyle}>
        Hello everyone,
    </Text>
    <Text style={styles.paragraphStyle}>
        My name is {userName} and I'm 21 years old.
    </Text>
    </View>
};

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 30,
        fontWeight: "bold"
    },

    paragraphStyle: {
        fontSize: 15,
        fontWeight: "italic"
    }
});

export default ComponentsScreen;