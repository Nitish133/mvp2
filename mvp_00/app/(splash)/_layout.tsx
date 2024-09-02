import {Stack} from "expo-router"

import { View, Text } from 'react-native'
import React from 'react'

const Layout = () => {
  return (
   <Stack >
    <Stack.Screen options={{title:"spalsh",headerShown:false}} name="Splash1"/>
   </Stack>
  )
}

export default Layout
