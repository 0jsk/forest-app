import React from "react";
import Router from "./router";
import { registerRootComponent } from "expo";
import { NativeRouter } from "react-router-native";
import { DefaultView } from "~shared/templates";

const App = () => {
  return (
    <DefaultView>
      <NativeRouter>
        <Router />
      </NativeRouter>
    </DefaultView>
  );
};

registerRootComponent(App);
