import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "@use-expo/font";

import TextComponent from "./src/components/Shared/TextComponent";
import { AppLoading } from "expo";
import VideoComponent from "./src/components/Shared/VideoComponent";
import GetStarted from "./src/screens/GetStarted";

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
      <View style={styles.container}>
        <GetStarted/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
