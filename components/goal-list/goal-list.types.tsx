import type { Goal } from '../../App.types';

export type GoalListProps = {
  goalList: Goal[];
  onDeleteGoal: (id: string) => void;
};
