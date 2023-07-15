import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const PokemonItem = ({name, onPress}) => {
  return (
    <View style={{padding:2}}>
    <TouchableOpacity 
        onPress={ onPress }
        style={styles.container} >
        <Image
                style={{width: 40, height: 40,}}
                source={require('../assets/pokebola.webp')}
            />
            <Text style={styles.pokemonName}>
                {name}
            </Text>
        </TouchableOpacity>
        <View  style={{width:"100%",marginTop:10, height:1,backgroundColor:"#BDBDBD" }}/>

        </View>
  )
}

export default PokemonItem


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft:15
    },
    pokemonName: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 14
    }
})