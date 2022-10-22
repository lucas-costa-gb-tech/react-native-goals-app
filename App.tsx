import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import { GoalInput } from './components';

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
      <GoalInput
        goalInputValue={goalText}
        onChangeGoalText={setGoalText}
        onAddGoal={handlePress}
      />
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
