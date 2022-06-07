import { StyleSheet } from 'react-native';

export const _textStyle = (isPressed: boolean): TextStyle => ({
  fontSize: 20,
  fontWeight: 'bold',
  color: isPressed ? '#fff' : '#000',
});

export default StyleSheet.create({
  container: {
    width: 110,
    height: 110,
    borderRadius: 110,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 75,
    height: 75,
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 8,
    shadowOpacity: 0.15,
    shadowColor: "#757575",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 3,
  },
});
