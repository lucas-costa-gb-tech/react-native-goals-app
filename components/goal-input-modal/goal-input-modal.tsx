import { Button, Image, Modal, StyleSheet, TextInput, View } from 'react-native';

import type { GoalInputModalProps } from './goal-input-modal.types';

function GoalInputModal({ visible, goalValue, onChangeGoalText, onAddGoal, onDismiss }: GoalInputModalProps) {
  const handleAddGoal = () => {
    onAddGoal();
    onDismiss();
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <View style={styles.logoImageContainer}>
              <Image style={styles.logoImage} source={require('../../assets/logo.png')} />
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Your course goal!"
                value={goalValue}
                onChangeText={onChangeGoalText}
                placeholderTextColor='#ffffff80'
                selectionColor='#ffffff80'
              />
            </View>
            <View style={styles.controlContainer}>
              <Button title="Cancel" color="#ffffff" onPress={onDismiss} />
              <Button title="Add goal" color="#ffffff" onPress={handleAddGoal} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    width: 360,
    height: 400,
    paddingHorizontal: 16,
    backgroundColor: '#5e0acc',
    borderRadius: 16,
    justifyContent: 'center',
  },
  contentContainer: {
    transform: [
      { translateY: -20, },
    ],
  },
  logoImageContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  textInputContainer: {
    marginBottom: 20,
  },
  textInput: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#9c67e0',
    borderRadius: 4,
    fontSize: 16,
    color: '#ffffff',
  },
  controlContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default GoalInputModal;
