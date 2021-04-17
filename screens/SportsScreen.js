import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MyHeader } from "../components/MyHeader"

export default class SportsScreen extends React.Component {
  render() {
    return (
      <View>
        <MyHeader text="Sports Screen"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 30,
    backgroundColor: 'indigo',
    padding: 10,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
})