import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export const _outerStyle = (isPressed: boolean, size: number): ViewStyle => ({
  width: size * 1.5,
  height: size * 1.5,
  borderRadius: size * 1.5,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: isPressed ? "rgba(0, 173, 255, 0.1)" : "transparent",
});

export const _buttonStyle = (isPressed: boolean, size: number): ViewStyle => ({
  width: size,
  height: size,
  borderRadius: size,
  alignItems: "center",
  justifyContent: "center",
  shadowRadius: 8,
  shadowOpacity: 0.15,
  shadowColor: "#757575",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  elevation: 3,
  backgroundColor: isPressed ? "#00ADFF" : "#fff",
});

export const _textStyle = (isPressed: boolean): TextStyle => ({
  fontSize: 20,
  fontWeight: "bold",
  color: isPressed ? "#fff" : "#000",
});

export default StyleSheet.create({});
