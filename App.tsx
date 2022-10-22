import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';

export default function App() {
  const [goalText, setGoalText] = useState('');
  const [goalList, setGoalList] = useState([]);

  const handlePress = () => {
    setGoalList(prevGoals => prevGoals.concat(goalText));
    setGoalText('');
  };

  const renderGoalItem = ({ item }) => (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{item}</Text>
    </View>
  );

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
        <FlashList
          data={goalList}
          renderItem={renderGoalItem}
          keyExtractor={goalItem => goalItem}
          estimatedItemSize={32}
        />
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
    width: '100%',
    height: 120,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
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
    flex: 1,
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
