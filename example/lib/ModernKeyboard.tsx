import React, { useState } from 'react';
import { View, StyleProp, ViewStyle, TouchableOpacity } from 'react-native';
/**
 * ? Local Imports
 */
import styles from './ModernKeyboard.style';
import Keypad from "./components/keypad/Keypad";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface ModernKeyboardProps {
  style?: CustomStyleProp;
}

const ModernKeyboard: React.FC<ModernKeyboardProps> = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.row}>
        <Keypad text="1" />
        <Keypad text="2" />
        <Keypad text="3" />
      </View>
      <View style={styles.row}>
        <Keypad text="4" />
        <Keypad text="5" />
        <Keypad text="6" />
      </View>
      <View style={styles.row}>
        <Keypad text="7" />
        <Keypad text="8" />
        <Keypad text="9" />
      </View>
      <View style={styles.row}>
        <Keypad text="." />
        <Keypad text="0" />
        <Keypad text="<" />
      </View>
    </View>
  );
};

export default ModernKeyboard;
