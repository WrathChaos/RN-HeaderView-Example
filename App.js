/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";
import { AppleHeader } from "@freakycoder/react-native-header-view";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <AppleHeader
          largeTitle={"Gruplar ve Arkadaşlar"}
          dateTitle={"Arkadaşların burda çıkar"}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
