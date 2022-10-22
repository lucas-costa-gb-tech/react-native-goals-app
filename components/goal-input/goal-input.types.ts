import type { GestureResponderEvent } from 'react-native';

export type GoalInputProps = {
  goalValue: string;
  onChangeGoalText: (text: string) => void;
  onAddGoal: (event: GestureResponderEvent) => void;
};
