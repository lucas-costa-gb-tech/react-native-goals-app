import 'react-native-get-random-values';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

import { GoalInputModal, GoalList } from './components';

import type { Goal } from './App.types';

export default function App() {
  const [goalText, setGoalText] = useState<string>('');
  const [goalList, setGoalList] = useState<Goal[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handleAddGoal = () => {
    const goalId = uuidv4();
    setGoalList(prevGoals => prevGoals.concat({ id: goalId, text: goalText }));
    setGoalText('');
  };

  const handleDeleteGoal = (id: string) => {
    setGoalList(prevGoals => prevGoals.filter(prevGoal => prevGoal.id !== id));
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Add new goal" color="#5e0acc" onPress={showModal} />
      <GoalList goalList={goalList} onDeleteGoal={handleDeleteGoal}/>
      <GoalInputModal
        visible={modalVisible}
        goalValue={goalText}
        onChangeGoalText={setGoalText}
        onAddGoal={handleAddGoal}
        onDismiss={hideModal}
      />
      <StatusBar style="dark" />
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
