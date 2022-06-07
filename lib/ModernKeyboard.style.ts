import { StyleSheet, Dimensions } from "react-native";
const { width: ScreenWidth } = Dimensions.get("screen");

export default StyleSheet.create({
  container: {},
  row: {
    paddingLeft: 16,
    paddingRight: 16,
    width: ScreenWidth,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
