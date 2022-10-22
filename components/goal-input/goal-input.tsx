import { Button, StyleSheet, TextInput, View } from 'react-native';

import type { GoalInputProps } from './goal-input.types';

function GoalInput({ goalValue, onChangeGoalText, onAddGoal }: GoalInputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        value={goalValue}
        onChangeText={onChangeGoalText}
      />
      <Button title="Add goal" onPress={onAddGoal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
});

export default GoalInput;
