import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MyHeader } from "../components/MyHeader"

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <MyHeader text="News"/>
        <TouchableOpacity
            onPress={()=>{
                this.props.navigation.navigate("SportsScreen")
            }}
          style={styles.button}>
          <Text style={styles.txt}>
            Sports
          </Text>
        </TouchableOpacity>
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