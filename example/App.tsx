import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from "react-native";
import ModernKeyboard from "./build/dist/ModernKeyboard";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const [input, setInput] = useState<string>();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <Text style={styles.textStyle}>{input}</Text>
      <ModernKeyboard
        onInputChange={(value: string) => {
          setInput(value);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  textStyle: {
    right: 48,
    bottom: 32,
    fontSize: 48,
    width: "100%",
    fontWeight: "bold",
    textAlign: "right",
    justifyContent: "flex-end",
  },
});

export default App;
