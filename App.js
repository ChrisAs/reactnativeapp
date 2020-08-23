import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setenterdGoal] = useState('')
  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Goals" style={styles.input} />
        <Button title="ADD" />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
  },
  input: {
    borderBottomColor: "black", borderBottomWidth: 1, fontSize: 30, width: 200
  },
});
