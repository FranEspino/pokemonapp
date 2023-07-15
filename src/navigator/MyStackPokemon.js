import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import PokemonDetail from '../components/PokemonDetail';
import Pokemons from '../screens/Pokemons';

const Stack = createStackNavigator();
const MyStackPokemon = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FD8106'}}>
      <StatusBar backgroundColor="#424242" barStyle="light-content" />
        <Stack.Navigator
        //diabled gesture
          gestureEnabled={false}

          initialRouteName="Pokemons"
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
            name="Pokemons"
            component={Pokemons}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="PokemonDetail"
            component={PokemonDetail}
          />

         
        </Stack.Navigator>
    </SafeAreaView>
  );
};

export default MyStackPokemon;
