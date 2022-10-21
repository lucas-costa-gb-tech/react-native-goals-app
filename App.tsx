import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [goalText, setGoalText] = useState('');
  const [goalList, setGoalList] = useState([]);

  const handlePress = () => {
    setGoalList(prevGoals => prevGoals.concat(goalText));
    setGoalText('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          value={goalText}
          onChangeText={setGoalText}
        />
        <Button title="Add goal" onPress={handlePress} />
      </View>
      <View style={styles.goalList}>
        {goalList.map((goalItem) => (
          <View key={goalItem} style={styles.goalItem}>
            <Text style={styles.goalText}>{goalItem}</Text>
          </View>
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 54,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    marginRight: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#cccccc',
    flex: 1,
  },
  goalList: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: '#ffffff',
  },
});
