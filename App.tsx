import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your course goal!" />
        <Button title="Add goal" />
      </View>
      <View style={styles.goalListContainer}>
        <Text>List of goals...</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 54,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    flex: 1,
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
  goalListContainer: {
    flex: 5,
  },
});
