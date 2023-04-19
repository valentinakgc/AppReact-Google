import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet2, TextInput} from 'react-native';
// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View> 
        <AssetExample />

        <TextInput
          style={styles.input}
          placeholder="Search ot type URL"
        />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ffff',
    padding: 8,
  },

  input: {
    height: 40,
    margin: 20,
    borderWidth: 1,
    padding: 10,
    borderColor: '#D1D1D1',
    backgroundColor: '#ffff',
    marginTop: -50,
  },
  

});