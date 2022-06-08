import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

export const _outerStyle = (
  isPressed: boolean,
  size: number,
  outerBackgroundColor: string,
  outerActiveBackgroundColor: string,
): ViewStyle => ({
  width: size * 1.5,
  height: size * 1.5,
  borderRadius: size * 1.5,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: isPressed
    ? outerActiveBackgroundColor
    : outerBackgroundColor,
});

export const _buttonStyle = (
  isPressed: boolean,
  size: number,
  buttonColor: string,
  buttonActiveColor: string,
): ViewStyle => ({
  width: size,
  height: size,
  borderRadius: size,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: isPressed ? buttonActiveColor : buttonColor,
  shadowRadius: 8,
  shadowOpacity: 0.15,
  shadowColor: "#757575",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  elevation: 3,
});

export const _textStyle = (
  isPressed: boolean,
  textColor: string,
  textActiveColor: string,
): TextStyle => ({
  fontSize: 20,
  fontWeight: "bold",
  color: isPressed ? textActiveColor : textColor,
});

export const _backspaceStyle = (
  isPressed: boolean,
  textColor: string,
  textActiveColor: string,
): ImageStyle => ({
  width: 35,
  height: 25,
  right: 1,
  tintColor: isPressed ? textActiveColor : textColor,
});

export default StyleSheet.create({});
