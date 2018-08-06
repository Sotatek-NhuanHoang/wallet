import 'node-libs-react-native/globals'
import './global';
import 'core-js'
import 'babel-polyfill';

import { AppRegistry } from "react-native";
import { YellowBox } from "react-native";


import App from "./App";

console.ignoredYellowBox = ["Remote debugger"];
YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);

AppRegistry.registerComponent("wallet", () => App);
