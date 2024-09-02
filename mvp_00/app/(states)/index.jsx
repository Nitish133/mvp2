import React, { useState, useRef } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  Image 
} from 'react-native';
import { Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useRouter } from 'expo-router';
const screenWidth = Dimensions.get('window').width;
const indianStates = [
  { name: "Andhra Pradesh", image: "" },
  { name: "Arunachal Pradesh", image: "" },
  { name: "Assam", image: "../../assets/images/91TtGGA+AeL.jpg" },
  { name: "Bihar",  image: "../../assets/images/91TtGGA+AeL.jpg" },
  { name: "Chhattisgarh",  image: "../../assets/images/91TtGGA+AeL.jpg"},
  { name: "Goa",  image: "../../assets/images/91TtGGA+AeL.jpg" },
  { name: "Gujarat",  image: "../../assets/images/91TtGGA+AeL.jpg" },
  { name: "Haryana",  image: "../../assets/images/91TtGGA+AeL.jpg"},
  { name: "Himachal Pradesh",  image: "../../assets/images/91TtGGA+AeL.jpg" },
  { name: "Jharkhand",  image: "../../assets/images/91TtGGA+AeL.jpg" },
  { name: "Karnataka",  image: "../../assets/images/91TtGGA+AeL.jpg" },
  { name: "Kerala",  image: "../../assets/images/91TtGGA+AeL.jpg" },
  { name: "Madhya Pradesh",  image: "../../assets/images/91TtGGA+AeL.jpg" },
  { name: "Maharashtra",  image: "../../assets/images/91TtGGA+AeL.jpg" },
  { name: "Manipur",  image: "../../assets/images/91TtGGA+AeL.jpg" },
  { name: "Meghalaya",  image: "../../assets/images/91TtGGA+AeL.jpg" },
  { name: "Mizoram",  image: "../../assets/images/91TtGGA+AeL.jpg" },
  { name: "Nagaland",  image: "../../assets/images/91TtGGA+AeL.jpg" },
  { name: "Odisha",  image: "../../assets/images/91TtGGA+AeL.jpg" },
  { name: "Punjab", image: "../../assets/images/91TtGGA+AeL.jpg" },
  { name: "Rajasthan",  image: "../../assets/images/91TtGGA+AeL.jpg" },
  { name: "Sikkim",  image: "../../assets/images/91TtGGA+AeL.jpg"},
  { name: "Tamil Nadu",  image: "../../assets/images/91TtGGA+AeL.jpg"},
  { name: "Telangana", image: "../../assets/images/91TtGGA+AeL.jpg"},
  { name: "Tripura",  image: "../../assets/images/91TtGGA+AeL.jpg"},
  { name: "Uttar Pradesh", image: "../../assets/images/91TtGGA+AeL.jpg"},
  { name: "Uttarakhand", image: "../../assets/images/91TtGGA+AeL.jpg" },
  { name: "West Bengal", image: "../../assets/images/91TtGGA+AeL.jpg" },
];

const IndianStates = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStates, setFilteredStates] = useState(indianStates);
  const animationRef = useRef({});
  const router = useRouter();

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = indianStates.filter(state => 
      state.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredStates(filtered);
  };

  const renderItem = ({ item, index }) => (
    <Animatable.View
      ref={(ref) => animationRef.current[index] = ref}
      animation="fadeInUp"
      delay={index * 100}
      style={styles.stateItem}
    >
      <TouchableOpacity onPress={() => handleStatePress(item.name)}>
        <Image source={require("../../assets/images/smart-cities-in-Madhya-Pradesh_0_1200.jpg")} style={styles.stateImage} />
        <Text style={styles.stateText}>{item.name}</Text>
      </TouchableOpacity>
    </Animatable.View>
  );

  const handleStatePress = (stateName) => {
    router.push({
      pathname: '/TPATS',
      params: { stateName: stateName }
    });
  };

  return (
    <View style={styles.container}>
      <Animatable.Text 
        animation="bounceIn"
        style={styles.title}
      >
        Indian States
      </Animatable.Text>
      <Animatable.View animation="fadeIn" delay={500}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search states..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </Animatable.View>
      <FlatList
        data={filteredStates}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  searchInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  listContainer: {
    paddingBottom: 20,
  },
  stateItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  stateText: {
    fontSize: 20,
    color: '#333',
    marginLeft: 10,
    marginTop:10
  },
  stateImage: {
    width:screenWidth-60,
    height: 150,
    borderRadius:20

    
  },
});

export default IndianStates;
