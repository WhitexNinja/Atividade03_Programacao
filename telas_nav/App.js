import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import UserRegisterScreen from './screens/UserRegisterScreen';
import ContactRegisterScreen from './screens/ContactRegisterScreen';
import ContactAlterationScreen from './screens/ContactAlterationScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{  headerStyle:{backgroundColor: 'blue'}, headerTintColor:'white', headerShown: true }}>
        <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Home' component={HomeScreen} options={{ headerTitleAlign: 'center' }} />
        <Stack.Screen name='Usuário' component={UserRegisterScreen} options={{ headerTitleAlign: 'center' }} />
        <Stack.Screen name='Contato' component={ContactRegisterScreen} options={{ headerTitleAlign: 'center' }} />
        <Stack.Screen name='Alteracao' component={ContactAlterationScreen} options={{ headerTitleAlign: 'center' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}