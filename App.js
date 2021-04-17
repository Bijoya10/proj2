import React from 'react';

import {createSwitchNavigator, createAppContainer} from "react-navigation"
import HomeScreen from "./screens/HomeScreen"
import SportsScreen from "./screens/SportsScreen"

export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

const Navigator= createSwitchNavigator({
  HomeScreen:{screen:HomeScreen},
  SportsScreen:{screen:SportsScreen}
})

var AppContainer= createAppContainer(Navigator)

