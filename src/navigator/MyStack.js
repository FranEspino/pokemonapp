import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import MyDrawer from './MyDrawer';
import Welcome from '../screens/Welcome';

const Stack = createStackNavigator();
const MyStack = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar backgroundColor="#424242" barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#212121',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            cardStyle: {
              backgroundColor: 'white',
            },
          }}>
          <Stack.Screen
            options={{headerShown: false}}
            name="MyDrawer"
            component={MyDrawer}
          />

          <Stack.Screen
            options={{headerShown: true}}
            name="Welcome"
            component={Welcome}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default MyStack;
