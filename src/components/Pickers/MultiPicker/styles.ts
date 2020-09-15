import { StyleSheet } from "react-native";
import { getColor, typography } from "../../../theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  closeButtonContainer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    alignSelf: "flex-end",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: getColor("grey2"),
    padding: 10,
  },
  rowLabel: {
    ...typography.p1("blue"),
    marginLeft: 10,
  },
  submitContainer: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
  },
});
