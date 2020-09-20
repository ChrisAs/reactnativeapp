import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from "react-native";

export default function App() {
  const [enteredGoal, setEnterdGoal] = useState("");
  const [courseGoals, setcourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnterdGoal(enteredText);
  };
  const addGoalHandler = () => {
    setcourseGoals((currentGoals) => [...courseGoals, enteredGoal]);
    console.log(enteredGoal);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Goals"
          style={styles.input}
          value={enteredGoal}
          onChangeText={goalInputHandler}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <ScrollView>
        {courseGoals.map((goal) => (
          <View key={goal} style={styles.listItem}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    fontSize: 30,
    width: 200,
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
