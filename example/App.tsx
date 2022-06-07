import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from "react-native";
import ModernKeyboard from "./build/dist/ModernKeyboard";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "flex-end" }}
    >
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <ModernKeyboard
        onInputChange={(value: string) => {
          console.log(value);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default App;
