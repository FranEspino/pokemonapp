import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const PokemonDetail = stack => {
  const [detail, setDetail] = useState({});
  const url = stack.route.params.url;

  const fecthDetailPokemon = async () => {
    const resp = await axios.get(url);
    setDetail(resp.data);
  };

  useEffect(() => {

    //disable toggle
         

    
    fecthDetailPokemon();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.basicInfo}>
        <Text style={styles.experience}>{`${detail.base_experience} EP`}</Text>
        <Image
          style={{width: 400, height: 280, resizeMode: 'contain'}}
          source={{
            uri: detail.sprites?.other['official-artwork'].front_default,
          }}
        />
      </View>

      <View style={styles.detail}>
        <Text style={styles.name}>{detail.name}</Text>
        <Text
          style={{
            fontSize: 23,
            marginTop: 12,
            fontWeight: '600',
            marginLeft: 10,
            color: '#000',
          }}>
          Basic Info
        </Text>
        <View style={styles.itemDetailContainer}>
          <Text style={styles.itemDetail}>{`Height: ${detail.height} m`}</Text>
          <View style={{width: 2, backgroundColor: '#fff'}} />
          <Text style={styles.itemDetail}>{`Weigth: ${detail.weight} kg`}</Text>
        </View>
        <Text
          style={{
            fontSize: 23,
            marginTop: 12,
            fontWeight: '600',
            marginLeft: 10,
            color: '#000',
          }}>
          Habilities Info
        </Text>

        <View style={styles.itemDetailContainer}>
          <ScrollView horizontal={true}>
            {detail.abilities?.map((item, index) => (
              <Text
                key={index}
                style={{
                  fontSize: 23,
                  fontWeight: '600',
                  marginLeft: 10,
                  color: '#000',
                }}>
                {`${item.ability.name}:  ${item.slot} 🔥 `}
              </Text>
            ))}
          </ScrollView>
        </View>
        <ScrollView>

 
        <View style={{flexDirection:'row'}} >
          <Image
            style={{width: 200, height: 200, resizeMode: 'contain'}}
            source={{
              uri: detail.sprites?.front_default,
            }}
          />
          <Image
            style={{width: 200, height:200, resizeMode: 'contain'}}
            source={{
              uri: detail.sprites?.back_default,
            }}
          />
        </View>
        <View style={{flexDirection:'row'}} >
          <Image
            style={{width: 200, height: 90, resizeMode: 'contain'}}
            source={{
              uri: detail.sprites?.versions['generation-ii'].crystal[
                'back_default'
              ],
            }}
          />
          <Image
            style={{width: 200, height: 90, resizeMode: 'contain'}}
            source={{
              uri: detail.sprites?.versions['generation-ii'].crystal[
                'back_shiny'
              ],
            }}
          />
        </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default PokemonDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FD8106',
  },
  experience: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 40,
    marginLeft: 12,
    color: '#fff',
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  basicInfo: {
    height: '40%',
    color: '#000',
  },
  detail: {
    backgroundColor: '#fff',
    height: '60%',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    padding: 6,
    //shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 19,
  },
  itemDetailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    //backgroundColor with rgba
    backgroundColor: 'rgba(250,127,6,0.4)',
    //blur effect

    borderRadius: 20,
    padding: 10,
  },

  itemDetail: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
});
