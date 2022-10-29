export type GoalInputModalProps = {
  visible: boolean;
  goalValue: string;
  onChangeGoalText: (text: string) => void;
  onAddGoal: () => void;
  onDismiss: () => void;
};
