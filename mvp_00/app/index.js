import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/Splash1'); // Adjust the route as needed
    }, 1000); // Wait for 3 seconds before redirecting

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, [router]);

  return (
    <View style={styles.container}>
     <Text style={{fontSize:50,color:"white",fontWeight:20}}>Welcome</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A90E2',
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
});

export default Index;
