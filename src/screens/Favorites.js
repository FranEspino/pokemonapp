import React from 'react'
import { Button, Text, View } from 'react-native'

const Favorites = drawer => {
  return (
    <View style={{marginTop:60}}>
       
      <Button title="🍔" onPress={() => 
      //toggle drawer
      drawer.navigation.toggleDrawer()
      
      } />
        <Text>Favorites</Text>
        </View>
  )
}

export default Favorites