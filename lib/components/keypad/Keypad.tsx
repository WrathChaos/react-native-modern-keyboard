import * as React from "react";
import {
  View,
  Text,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  ImageStyle,
} from "react-native";
import {
  _backspaceStyle,
  _buttonStyle,
  _outerStyle,
  _textStyle,
} from "./Keypad.style";
import { BACKSPACE_KEYPAD } from "../../ModernKeyboard";

type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;
type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;

export interface KeypadProps {
  textStyle?: CustomTextStyleProp;
  text?: string;
  size?: number;
  outerBackgroundColor?: string;
  outerActiveBackgroundColor?: string;
  buttonColor?: string;
  buttonActiveColor?: string;
  textColor?: string;
  textActiveColor?: string;
  backspaceStyle?: CustomImageStyleProp;
  backspaceImageSource?: ImageSourcePropType;
  onPress?: () => void;
}

const Keypad: React.FC<KeypadProps> = ({
  text,
  size = 75,
  outerBackgroundColor = "transparent",
  outerActiveBackgroundColor = "rgba(0, 173, 255, 0.1)",
  buttonColor = "#fff",
  buttonActiveColor = "#00ADFF",
  textColor = "#000",
  textActiveColor = "#fff",
  backspaceStyle,
  backspaceImageSource = require("../../local-assets/backspace.png"),
  textStyle,
  onPress,
}) => {
  const [isPressed, setPressed] = React.useState<boolean>(false);

  const renderBackspace = () => (
    <Image
      source={backspaceImageSource}
      style={[
        _backspaceStyle(isPressed, textColor, textActiveColor),
        backspaceStyle,
      ]}
    />
  );

  const renderText = () => (
    <Text
      style={[_textStyle(isPressed, textColor, textActiveColor), textStyle]}
    >
      {text}
    </Text>
  );

  return (
    <View
      style={_outerStyle(
        isPressed,
        size,
        outerBackgroundColor,
        outerActiveBackgroundColor,
      )}
    >
      <TouchableOpacity
        activeOpacity={1}
        style={_buttonStyle(isPressed, size, buttonColor, buttonActiveColor)}
        onPressIn={() => {
          setPressed(true);
        }}
        onPressOut={() => {
          setPressed(false);
          onPress?.();
        }}
      >
        {text === BACKSPACE_KEYPAD ? renderBackspace() : renderText()}
      </TouchableOpacity>
    </View>
  );
};

export default Keypad;
