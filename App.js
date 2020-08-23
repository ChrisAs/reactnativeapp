import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnterdGoal] = useState('');
  const [courseGoals, setcourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnterdGoal(enteredText);
  }
  const addGoalHandler = () => {
    setcourseGoals(currentGoals => [...courseGoals, enteredGoal])
    console.log(enteredGoal);
  }
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Goals" style={styles.input} value={enteredGoal} onChangeText={goalInputHandler} />
        <Button title="ADD" onPress={addGoalHandler} />
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
