
import { Text, View } from "react-native";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { StatusBar } from "react-native";
import { Home } from "./src/screens/Home";


export default function App() {

  return (
    <>
    <StatusBar 
      barStyle='light-content'
      backgroundColor='transparent'
      translucent
    />
    {/* <ExpoStatusBar style="light" /> */}
      <Home />
    </>
 )
}