import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home";
import Account from "./src/screens/Account";
import Notification from "./src/screens/Notification";

const BottomTab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Account" component={Account} />
      <BottomTab.Screen name="Notification" component={Notification} />
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Search" component={Account} />
      <BottomTab.Screen name="Cart" component={Notification} />
    </BottomTab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default App;
