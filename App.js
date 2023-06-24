import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation/index';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation></Navigation>

    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
