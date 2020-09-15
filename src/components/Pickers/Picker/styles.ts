import { StyleSheet } from "react-native";

import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../../constants";
import { colors } from "../../../theme";

export default StyleSheet.create({
  backdrop: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
    backgroundColor: colors.transparent,
    position: "absolute",
    zIndex: 1,
  },
  pickerContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  picker: {
    backgroundColor: colors.line,
    zIndex: 2,
  },
});
