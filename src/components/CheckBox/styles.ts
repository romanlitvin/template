import { StyleSheet } from "react-native";

import { getColor } from "../../theme";

export default StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: getColor(),
    borderRadius: 15,
  },
});
