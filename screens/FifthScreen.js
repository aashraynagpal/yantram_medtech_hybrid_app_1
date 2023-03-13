import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function FifthScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Fifth Screen</Text>
      <Button title="Go To Screen Sixth" onPress={() => navigation.push("Fourth")} />
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
