import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const L_layout = () => {
  return (
    <Stack>
        <Stack.Screen name='index' options={{headerShown:false}}/>
        <Stack.Screen name='TPATS' options={{headerShown:false}}/>
    </Stack>
   
  )
}

export default L_layout