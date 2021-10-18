import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryScreen from "./Screens/CategoryScreen";
import CategoryMenu from "./Screens/categoryMenu";
import CategoryMenuDetails from "./Screens/categoryMenuDetails";

const Stack = createNativeStackNavigator();

function customFont() {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans_Condensed-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
}

export default function App(props) {
  const [isFontReady, setIsFontReady] = useState(false);

  if (!isFontReady) {
    return (
      <AppLoading
        startAsync={customFont}
        onFinish={() => setIsFontReady(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First" component={CategoryScreen} />
        <Stack.Screen name="Second" component={CategoryMenu} />
        <Stack.Screen name="Third" component={CategoryMenuDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
