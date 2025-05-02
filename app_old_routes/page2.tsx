import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";
import { NavigationProp } from "./navigation-prop";

export default function Page2Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View>
      <Text>Page 2</Text>
      <Button onPress={() => navigation.navigate('old_page3')} title="Go To Page 3" />
    </View>
  );
}