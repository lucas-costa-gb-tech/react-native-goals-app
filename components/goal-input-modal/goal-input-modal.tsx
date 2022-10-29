import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';

import type { GoalInputModalProps } from './goal-input-modal.types';

function GoalInputModal({ visible, goalValue, onChangeGoalText, onAddGoal, onDismiss }: GoalInputModalProps) {
  const handleAddGoal = () => {
    onAddGoal();
    onDismiss();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Your course goal!"
            value={goalValue}
            onChangeText={onChangeGoalText}
          />
        </View>
        <View style={styles.controlContainer}>
          <Button title="Cancel" color="#5e0acc" onPress={onDismiss} />
          <Button title="Add goal" color="#5e0acc" onPress={handleAddGoal} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: 'center',
  },
  textInputContainer: {
    marginBottom: 20,
  },
  textInput: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#cccccc',
  },
  controlContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default GoalInputModal;
