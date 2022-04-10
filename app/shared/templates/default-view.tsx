import React from "react";
import type { FC } from "react";
import { StyleSheet, View } from "react-native";

export const DefaultView: FC = ({ children }) => (
  <View style={styles.page}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  page: {
    flex: 1
  }
});

