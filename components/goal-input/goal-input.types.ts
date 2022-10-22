import type { GestureResponderEvent } from 'react-native';

export type GoalInputProps = {
  goalInputValue: string;
  onChangeGoalText: (text: string) => void;
  onAddGoal: (event: GestureResponderEvent) => void;
};
