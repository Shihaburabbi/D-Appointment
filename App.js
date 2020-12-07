//https://psdetch.com/

import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { MainStackNavigator } from "./Screens/Navigation/StackNavigator";
import BottomTabNavigator from "./Screens/Navigation/TabNavigator";
import DrawerNavigator from "./Screens/Navigation/DrawerNavigator";

const App = () => {
  return (
    <NavigationContainer>
      {/* <MainStackNavigator /> */}
      {/* <BottomTabNavigator /> */}
      <DrawerNavigator />
    </NavigationContainer>
  );
}
export default App