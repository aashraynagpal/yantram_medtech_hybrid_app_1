import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import FourthScreen from './FourthScreen';

export default function ThirdScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Third Screen</Text>
      <Button title="Go to screen fourth" onPress={() => navigation.push("Fourth")} />
      <Button title="Back" onPress={() => navigation.pop()} />
      <Button title="Back to home screen" onPress={() => navigation.popToTop()} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
