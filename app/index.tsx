import { Text, View } from "react-native";
import Card from "./card";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card/>
    </View>
  );
}
