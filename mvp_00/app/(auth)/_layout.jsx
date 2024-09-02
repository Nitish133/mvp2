import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
const Layout = () => {
  return (
   <Stack initialRouteName='login'>
<Stack.Screen name='login' options={{headerShown:false}}/>
<Stack.Screen name='signup' options={{headerShown:false}}/>
   </Stack>
  )
}

export default Layout