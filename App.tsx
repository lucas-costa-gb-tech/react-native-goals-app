import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { GoalInput, GoalList } from './components';

export default function App() {
  const [goalText, setGoalText] = useState('');
  const [goalList, setGoalList] = useState([]);

  const handlePress = () => {
    setGoalList(prevGoals => prevGoals.concat(goalText));
    setGoalText('');
  };

  return (
    <View style={styles.container}>
      <GoalInput
        goalValue={goalText}
        onChangeGoalText={setGoalText}
        onAddGoal={handlePress}
      />
      <GoalList goalList={goalList} />
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
