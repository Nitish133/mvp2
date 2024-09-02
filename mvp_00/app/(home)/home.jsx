import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TextInput, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';
import { useRouter } from 'expo-router'; // Import the router hook
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for icons

const HomeScreen = () => {
  const [places, setPlaces] = useState([
    {
      id: 1,
      name: 'Place 1',
      description: 'Description of Place 1',
      latitude: 23.2599,
      longitude: 77.4126,
      image_url: 'https://example.com/image1.jpg',
      category: 'tourist',
    },
    {
      id: 2,
      name: 'Hotel 1',
      description: 'Description of Hotel 1',
      latitude: 23.2000,
      longitude: 77.5000,
      image_url: 'https://example.com/image2.jpg',
      category: 'hotel',
    },
    {
      id: 3,
      name: 'Restaurant 1',
      description: 'Certified Restaurant 1',
      latitude: 23.3000,
      longitude: 77.6000,
      image_url: 'https://example.com/image3.jpg',
      category: 'restaurant',
    },
  ]);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showCategory, setShowCategory] = useState('all');
  const router = useRouter();

  useEffect(() => {
    const requestLocationPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location.coords);
    };

    requestLocationPermission();
  }, []);

  const handleMarkerPress = (place) => {
    router.push({ pathname: '/placeDetails', params: { place: JSON.stringify(place) } });
  };

  const filteredPlaces = places.filter((place) =>
    (showCategory === 'all' || place.category === showCategory) &&
    place.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      {currentLocation && (
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            {filteredPlaces.map((place) => (
              <Marker
                key={place.id}
                coordinate={{ latitude: place.latitude, longitude: place.longitude }}
                title={place.name}
                description={place.description}
                onPress={() => handleMarkerPress(place)}
              >
                <Image source={{ uri: place.image_url }} style={styles.markerImage} />
                <Callout>
                  <View style={styles.calloutView}>
                    <Text style={styles.calloutTitle}>{place.name}</Text>
                    <Text>{place.description}</Text>
                  </View>
                </Callout>
              </Marker>
            ))}
            <Marker
              coordinate={{
                latitude: currentLocation.latitude,
                longitude: currentLocation.longitude,
              }}
              title="You are here"
              pinColor="blue"
            />
          </MapView>
        </View>
      )}

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search for places..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => {/* Handle SOS emergency */}}>
          <Ionicons name="alert-circle-outline" size={24} color="white" />
          <Text style={styles.buttonText}>SOS Emergency</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setShowCategory('hotel')}>
          <Ionicons name="bed-outline" size={24} color="white" />
          <Text style={styles.buttonText}>Hotels</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setShowCategory('restaurant')}>
          <Ionicons name="restaurant-outline" size={24} color="white" />
          <Text style={styles.buttonText}>Restaurants</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setShowCategory('all')}>
          <Ionicons name="filter-outline" size={24} color="white" />
          <Text style={styles.buttonText}>All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredPlaces}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.placeItem} onPress={() => handleMarkerPress(item)}>
            <Image source={{ uri: item.image_url }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.placeName}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
    marginBottom: 70, // Space for buttons
  },
  map: {
    width: '100%',
    height: '100%',
  },
  searchContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    zIndex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    padding: 5,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    elevation: 4,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    marginLeft: 5,
    fontSize: 14,
  },
  placeItem: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    margin: 5,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
    justifyContent: 'center',
  },
  placeName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  markerImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  calloutView: {
    width: 150,
    padding: 5,
  },
  calloutTitle: {
    fontWeight: 'bold',
  },
  listContainer: {
    paddingBottom: 80, // Space for buttons
  },
});

export default HomeScreen;
