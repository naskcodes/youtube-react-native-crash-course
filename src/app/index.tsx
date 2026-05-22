import { Text, View, Platform } from "react-native";
import * as Device from 'expo-device';

export default function HomeScreen() {
  return (
    <View>
      <Text>Welcome to Macrozone</Text>
      <Text>Running on: {Platform.OS}</Text>
      <Text>Device Model: {Device.modelName}</Text>
      <Text>Device Brand: {Device.brand}</Text>
      <Text>OS Version: {Device.osVersion}</Text>
    </View>
  );
}