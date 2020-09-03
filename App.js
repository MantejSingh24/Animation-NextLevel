import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ImagesView from './ImagesView';
import NextLevel from './NextLevel';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="ImagesView" component={ImagesView} />
        <Stack.Screen name="NextLevel" component={NextLevel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
