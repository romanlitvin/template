import { typography } from "./typography";
import { getColor } from "./colors";

export const headerTheme = {
  default: {
    container: {
      backgroundColor: getColor("header"),
      borderBottomWidth: 1,
      borderBottomColor: getColor("grey2"),
    },
    title: { ...typography.h4("blue") },
    icon: {
      padding: 6,
      color: getColor(),
      borderRadius: 20,
    },
  },
};
