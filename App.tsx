import 'react-native-get-random-values';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

import { GoalInput, GoalList } from './components';

import type { Goal } from './App.types';

export default function App() {
  const [goalText, setGoalText] = useState<string>('');
  const [goalList, setGoalList] = useState<Goal[]>([]);

  const handleAddGoal = () => {
    const goalId = uuidv4();
    setGoalList(prevGoals => prevGoals.concat({ id: goalId, text: goalText }));
    setGoalText('');
  };

  const handleDeleteGoal = (id: string) => {
    setGoalList(prevGoals => prevGoals.filter(prevGoal => prevGoal.id !== id));
  };

  return (
    <View style={styles.container}>
      <GoalInput
        goalValue={goalText}
        onChangeGoalText={setGoalText}
        onAddGoal={handleAddGoal}
      />
      <GoalList goalList={goalList} onDeleteGoal={handleDeleteGoal}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 54,
    paddingHorizontal: 16,
    flex: 1,
  },
});
