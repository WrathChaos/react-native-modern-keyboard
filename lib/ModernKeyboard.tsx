import * as React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./ModernKeyboard.style";
import Keypad, { KeypadProps } from "./components/keypad/Keypad";
import { useCallback } from "react";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

export const BACKSPACE_KEYPAD = "backspace";
const DECIMAL = ".";

export interface ModernKeyboardProps extends KeypadProps {
  style?: CustomStyleProp;
  onInputChange: (input: string) => void;
}

const ModernKeyboard: React.FC<ModernKeyboardProps> = ({
  style,
  onInputChange,
  ...rest
}) => {
  let input = "";

  const handlePress = useCallback(
    (keypad: number | string) => {
      if (keypad === BACKSPACE_KEYPAD) {
        input = input.slice(0, -1);
      } else if (keypad === DECIMAL && input.includes(DECIMAL)) {
        return;
      } else {
        input += keypad;
      }

      onInputChange && onInputChange(input);
    },
    [input],
  );

  return (
    <View style={[styles.container, style]}>
      <View style={styles.row}>
        <Keypad {...rest} text="1" onPress={() => handlePress(1)} />
        <Keypad {...rest} text="2" onPress={() => handlePress(2)} />
        <Keypad {...rest} text="3" onPress={() => handlePress(3)} />
      </View>
      <View style={styles.row}>
        <Keypad {...rest} text="4" onPress={() => handlePress(4)} />
        <Keypad {...rest} text="5" onPress={() => handlePress(5)} />
        <Keypad {...rest} text="6" onPress={() => handlePress(6)} />
      </View>
      <View style={styles.row}>
        <Keypad {...rest} text="7" onPress={() => handlePress(7)} />
        <Keypad {...rest} text="8" onPress={() => handlePress(8)} />
        <Keypad {...rest} text="9" onPress={() => handlePress(9)} />
      </View>
      <View style={styles.row}>
        <Keypad {...rest} text={DECIMAL} onPress={() => handlePress(DECIMAL)} />
        <Keypad {...rest} text="0" onPress={() => handlePress(0)} />
        <Keypad
          {...rest}
          text={BACKSPACE_KEYPAD}
          onPress={() => handlePress(BACKSPACE_KEYPAD)}
        />
      </View>
    </View>
  );
};

export default ModernKeyboard;
