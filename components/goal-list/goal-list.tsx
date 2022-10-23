import { Pressable, StyleSheet, Text, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import type { GoalListProps } from './goal-list.types';

function GoalList({ goalList, onDeleteGoal }: GoalListProps) {
  const renderGoalItem = ({ item }) => (
    <Pressable
      style={styles.goalItem}
      onPress={() => {
        onDeleteGoal(item.id)
      }}
    >
      <Text style={styles.goalText}>{item.text}</Text>
    </Pressable>
  );

  return (
    <View style={styles.goalList}>
      <FlashList
        data={goalList}
        renderItem={renderGoalItem}
        keyExtractor={goalItem => goalItem.id}
        estimatedItemSize={32}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 54,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalList: {
    flex: 1,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: '#ffffff',
  },
});

export default GoalList;
