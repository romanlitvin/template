import React from "react";

import { StyleSheet, View } from "react-native";

import { getColor } from "../theme";

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: getColor("dim"),
    marginLeft: 24,
  },
});

const ItemSeparator: React.FC = () => <View style={styles.separator} />;

export default React.memo(ItemSeparator);
