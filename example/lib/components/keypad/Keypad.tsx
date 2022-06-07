import React, { useState } from 'react';
import {
  View,
  StyleProp,
  Text,
  ViewStyle,
  TouchableOpacity,
  TextStyle,
} from 'react-native';
/**
 * ? Local Imports
 */
import styles, { _textStyle } from './Keypad.style';

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

interface KeypadProps {
  textStyle?: CustomTextStyleProp;
  text: string;
}

const Keypad: React.FC<KeypadProps> = ({ text, textStyle }) => {
  const [isPressed, setPressed] = useState<boolean>(false);
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isPressed ? 'rgba(0, 173, 255, 0.1)' : 'transparent',
        },
      ]}
    >
      <TouchableOpacity
        activeOpacity={1}
        style={[
          styles.button,
          {
            backgroundColor: isPressed ? '#00ADFF' : '#fff',
          },
        ]}
        onPressIn={() => {
          setPressed(true);
        }}
        onPressOut={() => {
          setPressed(false);
        }}
      >
        <Text style={[_textStyle(isPressed), textStyle]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Keypad;
