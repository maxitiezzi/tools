import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

export default function Home({ navigation }) {
  return (
    <View style={[{ width: "90%", margin: 10 }]}>

      <Button
        title="Facturas"
        onPress={() => navigation.navigate('Facturas')}
      />
      <Separator />
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
    width: 10,
    marginTop: 10
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});
