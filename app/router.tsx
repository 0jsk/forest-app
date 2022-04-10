import React from "react";
import { View, Text } from "react-native";
import { Route, Routes } from "react-router-native";

export default function Router() {
  return (
    <Routes>
      <Route
        element={
          <View>
            <Text>index page</Text>
          </View>
        }
        path="/"
      />
    </Routes>
  );
}
