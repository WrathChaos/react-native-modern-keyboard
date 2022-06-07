import * as React from "react";
import {
  View,
  Text,
  StyleProp,
  TextStyle,
  TouchableOpacity,
} from "react-native";
import { _buttonStyle, _outerStyle, _textStyle } from "./Keypad.style";

type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

export interface KeypadProps {
  textStyle?: CustomTextStyleProp;
  text: string;
  size?: number;
  onPress: () => void;
}

const Keypad: React.FC<KeypadProps> = ({
  text,
  size = 75,
  onPress,
  textStyle,
}) => {
  const [isPressed, setPressed] = React.useState<boolean>(false);
  return (
    <View style={_outerStyle(isPressed, size)}>
      <TouchableOpacity
        activeOpacity={1}
        style={_buttonStyle(isPressed, size)}
        onPressIn={() => {
          setPressed(true);
        }}
        onPressOut={() => {
          setPressed(false);
          onPress?.();
        }}
      >
        <Text style={[_textStyle(isPressed), textStyle]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Keypad;
