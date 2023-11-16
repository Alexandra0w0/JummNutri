// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import LoginScreen from './LoginScreen';
import MenuNavigator from './MenuNavigator';
import MenuIndex from './MenuIndex';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Menu"
          component={() => (
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <MenuIndex />
              <MenuNavigator />
            </View>
          )}
          options={{
            headerLeft: null,
            headerTitle: null,
            headerShown: false,
          }}
        />
        {}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
