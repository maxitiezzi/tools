import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function Home({ navigation }) {
  return (
    <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
      <Text>Herramientas</Text>

      <Button
        title="Facturas"
        onPress={() => navigation.navigate('Facturas')}
      />
      <Button
        title="Whatsapp"
        onPress={() => navigation.navigate('Whatsapp')}
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
  buttons: {
    width: 10
  }
});
