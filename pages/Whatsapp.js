import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Linking } from 'react-native';
/*
class Whatsapp extends React.Component {
  constructor() {
    super()
    this.state = {
      numero: ''
    }
  }
  render() {
    return (
      <View>
        <TextInput></TextInput>
      </View>

    )
  }
}
*/



var value = 45
var link = 'https://api.whatsapp.com/send?phone='
export default function Whatsapp({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Introduce el numero</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          value = text
        }}
      />
      <Button
        title="Escribir"
        onPress={() => {
          Linking.openURL(link + value)
        }}
      />
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1
  },
});
