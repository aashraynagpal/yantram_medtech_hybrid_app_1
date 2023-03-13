import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import FifthScreen from './FifthScreen'

export default function FourthScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Fourth Screen</Text>
      <Button title="Go To Screen Fifth" onPress={() => navigation.push("Fifth")} />
      <Button title="Back" onPress={() => navigation.pop()} />
      <Button title="Back to Home Screen" onPress={() => navigation.popToTop()} />
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
