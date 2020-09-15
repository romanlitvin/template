import { StyleSheet } from "react-native";

import { DEVICE_WIDTH } from "../../constants";
import { colors } from "../../theme";

export default StyleSheet.create({
  container: {
    width: DEVICE_WIDTH - 48,
    alignSelf: "center",
  },
  input: {
    width: "100%",
    height: 45,
    borderWidth: 1,
    borderColor: colors.dim,
    paddingHorizontal: 10,
    color: colors.text,
    borderRadius: 10,
    fontSize: 16,
    lineHeight: 18,
  },
  label: {
    fontSize: 14,
    lineHeight: 16,
    color: colors.text,
    marginBottom: 10,
  },
});
