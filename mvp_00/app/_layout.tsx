import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack  >

     <Stack.Screen name="index" options={{headerShown:false}}/>
      <Stack.Screen name="(splash)"  options={{title:"spash",headerShown:false}}/>
      <Stack.Screen name="(auth)" options={{headerShown:false}} />
      <Stack.Screen name="(states)" options={{headerShown:false}}/>
      <Stack.Screen name="(home)" options={{headerShown:false}}/>
    </Stack>
  );
}
