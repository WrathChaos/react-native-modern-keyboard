import { StyleSheet } from 'react-native';

export const _textStyle = (isPressed: boolean): TextStyle => ({
  fontSize: 20,
  fontWeight: 'bold',
  color: isPressed ? '#fff' : '#000',
});

export default StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 75,
    height: 75,
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 5,
    shadowOpacity: 0.2,
    shadowColor: "#757575",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 3,
  },
});
