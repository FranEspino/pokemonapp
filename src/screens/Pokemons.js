import React, { useEffect, useState } from 'react';
import {Button, View} from 'react-native';
import PokemonItem from '../components/PokemonItem';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

const Pokemons = stack => {
  const [pokemons, setPokemons] = useState([])

  const fetchApiPokemon = async () => {
    const resp = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40&offset=0')
    setPokemons(resp.data.results)
  }

  const goToDetail = (url) => {
    console.log(url)
    stack.navigation.navigate('PokemonDetail', {url})

  }
  useEffect(() => {
    fetchApiPokemon()
  
    },[])

  return (
    <View>
      <Button title="🍔" onPress={() => 
      //toggle drawer
      stack.navigation.toggleDrawer()
      
      } />

    <ScrollView style={{marginVertical: 30}}>
      {
        pokemons.map( 
          (pokemon, index) =>
           <PokemonItem key={index} name={pokemon.name} onPress={() => goToDetail(pokemon.url)} />
        )
      }
   
   
    </ScrollView>
    </View>
  );
};

export default Pokemons;
