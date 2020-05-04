import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "@use-expo/font";

import TextComponent from "./src/components/Shared/TextComponent";
import { AppLoading } from "expo";
import VideoComponent from "./src/components/Shared/VideoComponent";
import GetStarted from "./src/screens/GetStarted";
import RestaurantRecommendation from "./src/screens/Home/RestaurantRecommendation";

import { MyStack } from "./src/routes/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "./src/routes/TabNavigator";
import IOSProfile from "./src/screens/IOSProfile";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Proxima Nova Regular": require("./src/assets/fonts/Proxima-Nova-Regular.otf"),
    "Proxima Nova Alt Light": require("./src/assets/fonts/Proxima-Nova-Alt-Light.otf"),
    "Proxima Nova Condensed Semibold": require("./src/assets/fonts/Proxima-Nova-Condensed-Semibold.otf"),
    "Proxima Nova Bold": require("./src/assets/fonts/Proxima-Nova-Bold.otf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
