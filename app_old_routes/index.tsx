import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';
import { NavigationProp } from './navigation-prop';
import Page2Screen from './page2';
import Page3Screen from './page3';

function IndexScreen() {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View>
      <Text>Index</Text>
      <Button onPress={() => navigation.navigate('old_page2')} title="Go To Page 2" />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function IndexStack() {
  return (
    <Stack.Navigator initialRouteName="old_index">
      <Stack.Screen name="old_index" component={IndexScreen} />
      <Stack.Screen name="old_page2" component={Page2Screen} />
      <Stack.Screen name="old_page3" component={Page3Screen} />
    </Stack.Navigator>
  )
}