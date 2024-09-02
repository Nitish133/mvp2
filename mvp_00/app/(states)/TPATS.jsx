import React from 'react';
import { View, Text, FlatList, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useRouter } from 'expo-router';
const touristData = {
  "Madhya Pradesh": [
    {
      name: "Khajuraho",
      image_url: "https://example.com/khajuraho.jpg",
      description: "Famous for its ancient temples with intricate sculptures."
    },
    {
      name: "Bandhavgarh National Park",
      image_url: "https://example.com/bandhavgarh.jpg",
      description: "Renowned for its tiger population and rich wildlife."
    },
    {
      name: "Sanchi Stupa",
      image_url: "https://example.com/sanchi.jpg",
      description: "A UNESCO World Heritage site famous for its ancient Buddhist stupas."
    }
  ],
  "Andhra Pradesh": [
    {
      name: "Tirupati",
      image_url: "https://example.com/tirupati.jpg",
      description: "One of the most famous pilgrimage centers in India."
    },
    {
      name: "Araku Valley",
      image_url: "https://example.com/araku.jpg",
      description: "A scenic hill station known for its coffee plantations."
    },
    {
      name: "Vijayawada Kanaka Durga Temple",
      image_url: "https://example.com/vijayawada.jpg",
      description: "A prominent temple dedicated to Goddess Durga."
    }
  ],
  "Arunachal Pradesh": [
    {
      name: "Tawang",
      image_url: "https://example.com/tawang.jpg",
      description: "Known for its beautiful monasteries and scenic landscapes."
    },
    {
      name: "Ziro Valley",
      image_url: "https://example.com/ziro.jpg",
      description: "A picturesque valley popular for its rice fields and pine trees."
    },
    {
      name: "Namdapha National Park",
      image_url: "https://example.com/namdapha.jpg",
      description: "A biodiversity hotspot with unique flora and fauna."
    }
  ],
  "Assam": [
    {
      name: "Kaziranga National Park",
      image_url: "https://example.com/kaziranga.jpg",
      description: "Famous for the one-horned rhinoceros and rich wildlife."
    },
    {
      name: "Majuli Island",
      image_url: "https://example.com/majuli.jpg",
      description: "The world's largest river island, known for its culture and traditions."
    },
    {
      name: "Kamakhya Temple",
      image_url: "https://example.com/kamakhya.jpg",
      description: "A significant Hindu temple dedicated to Goddess Kamakhya."
    }
  ],
  "Bihar": [
    {
      name: "Bodh Gaya",
      image_url: "https://example.com/bodhgaya.jpg",
      description: "A sacred site where Buddha attained enlightenment."
    },
    {
      name: "Nalanda",
      image_url: "https://example.com/nalanda.jpg",
      description: "Home to the ancient Nalanda University, a center of learning."
    },
    {
      name: "Patna Sahib Gurudwara",
      image_url: "https://example.com/patnasahib.jpg",
      description: "A revered Sikh pilgrimage site, the birthplace of Guru Gobind Singh."
    }
  ],
  "Chhattisgarh": [
    {
      name: "Chitrakoot Waterfalls",
      image_url: "https://example.com/chitrakoot.jpg",
      description: "The largest waterfall in India, known as the 'Niagara of India'."
    },
    {
      name: "Bastar",
      image_url: "https://example.com/bastar.jpg",
      description: "Famous for its tribal culture and natural beauty."
    },
    {
      name: "Achanakmar Wildlife Sanctuary",
      image_url: "https://example.com/achanakmar.jpg",
      description: "A dense forest sanctuary with a rich variety of wildlife."
    }
  ],
  "Goa": [
    {
      name: "Baga Beach",
      image_url: "https://example.com/baga.jpg",
      description: "One of the most popular beaches in Goa, known for its nightlife."
    },
    {
      name: "Dudhsagar Falls",
      image_url: "https://example.com/dudhsagar.jpg",
      description: "A spectacular waterfall on the Goa-Karnataka border."
    },
    {
      name: "Basilica of Bom Jesus",
      image_url: "https://example.com/bomjesus.jpg",
      description: "A UNESCO World Heritage site, known for its baroque architecture."
    }
  ],
  "Gujarat": [
    {
      name: "Gir National Park",
      image_url: "https://example.com/gir.jpg",
      description: "The only place in the world where Asiatic lions can be seen in the wild."
    },
    {
      name: "Rann of Kutch",
      image_url: "https://example.com/rann.jpg",
      description: "A vast salt desert, known for the Rann Utsav festival."
    },
    {
      name: "Somnath Temple",
      image_url: "https://example.com/somnath.jpg",
      description: "One of the twelve Jyotirlinga shrines dedicated to Lord Shiva."
    }
  ],
  "Haryana": [
    {
      name: "Kurukshetra",
      image_url: "https://example.com/kurukshetra.jpg",
      description: "A historic city, believed to be the site of the Mahabharata war."
    },
    {
      name: "Sultanpur Bird Sanctuary",
      image_url: "https://example.com/sultanpur.jpg",
      description: "A bird watcher's paradise, home to many migratory birds."
    },
    {
      name: "Pinjore Gardens",
      image_url: "https://example.com/pinjore.jpg",
      description: "A beautiful Mughal garden, also known as Yadavindra Gardens."
    }
  ],
  "Himachal Pradesh": [
    {
      name: "Shimla",
      image_url: "https://example.com/shimla.jpg",
      description: "The capital city, known for its colonial architecture and scenic beauty."
    },
    {
      name: "Manali",
      image_url: "https://example.com/manali.jpg",
      description: "A popular hill station, famous for its snow-capped mountains and adventure sports."
    },
    {
      name: "Dharamshala",
      image_url: "https://example.com/dharamshala.jpg",
      description: "Home to the Dalai Lama, known for its Tibetan culture and monasteries."
    }
  ],
  "Jharkhand": [
    {
      name: "Ranchi",
      image_url: "https://example.com/ranchi.jpg",
      description: "The capital city, known for its waterfalls and scenic landscapes."
    },
    {
      name: "Netarhat",
      image_url: "https://example.com/netarhat.jpg",
      description: "A hill station often referred to as the 'Queen of Chotanagpur'."
    },
    {
      name: "Deoghar",
      image_url: "https://example.com/deoghar.jpg",
      description: "A religious destination, home to the famous Baidyanath Temple."
    }
  ],
  "Karnataka": [
    {
      name: "Mysore Palace",
      image_url: "https://example.com/mysore.jpg",
      description: "A historic palace known for its grandeur and architectural beauty."
    },
    {
      name: "Hampi",
      image_url: "https://example.com/hampi.jpg",
      description: "A UNESCO World Heritage site, famous for its ancient temples and ruins."
    },
    {
      name: "Coorg",
      image_url: "https://example.com/coorg.jpg",
      description: "A scenic hill station, known for its coffee plantations and misty landscapes."
    }
  ],
  "Kerala": [
    {
      name: "Munnar",
      image_url: "https://example.com/munnar.jpg",
      description: "A popular hill station, known for its tea gardens and lush greenery."
    },
    {
      name: "Alleppey Backwaters",
      image_url: "https://example.com/alleppey.jpg",
      description: "Famous for its serene backwaters and houseboat cruises."
    },
    {
      name: "Kochi",
      image_url: "https://example.com/kochi.jpg",
      description: "A vibrant city known for its colonial history and cultural diversity."
    }
  ],
  "Maharashtra": [
    {
      name: "Ajanta and Ellora Caves",
      image_url: "https://example.com/ajanta.jpg",
      description: "Ancient rock-cut caves famous for their sculptures and paintings."
    },
    {
      name: "Mumbai Gateway of India",
      image_url: "https://example.com/gateway.jpg",
      description: "A historic monument and a popular tourist spot in Mumbai."
    },
    {
      name: "Lonavala",
      image_url: "https://example.com/lonavala.jpg",
      description: "A scenic hill station known for its beautiful landscapes and waterfalls."
    }
  ],
  "Manipur": [
    {
      name: "Loktak Lake",
      image_url: "https://example.com/loktak.jpg",
      description: "The largest freshwater lake in northeastern India, known for its floating islands."
    },
    {
      name: "Imphal",
      image_url: "https://example.com/imphal.jpg",
      description: "The capital city, known for its historical monuments and vibrant culture."
    },
    {
      name: "Keibul Lamjao National Park",
      image_url: "https://example.com/keibul.jpg",
      description: "The only floating national park in the world, home to the endangered Sangai deer."
    }
  ],
  "Meghalaya": [
    {
      name: "Shillong",
      image_url: "https://example.com/shillong.jpg",
      description: "The capital city, known as the 'Scotland of the East' for its rolling hills and pleasant climate."
    },
    {
      name: "Cherrapunji",
      image_url: "https://example.com/cherrapunji.jpg",
      description: "One of the wettest places on earth, famous for its living root bridges."
    },
    {
      name: "Living Root Bridges",
      image_url: "https://example.com/rootbridges.jpg",
      description: "Unique bridges made from the roots of ancient trees, a marvel of bioengineering."
    }
  ],
  "Mizoram": [
    {
      name: "Aizawl",
      image_url: "https://example.com/aizawl.jpg",
      description: "The capital city, known for its picturesque setting and rich cultural heritage."
    },
    {
      name: "Blue Mountain",
      image_url: "https://example.com/bluemountain.jpg",
      description: "The highest peak in Mizoram, offering stunning panoramic views."
    },
    {
      name: "Vantawng Falls",
      image_url: "https://example.com/vantawng.jpg",
      description: "The highest waterfall in the state, surrounded by lush green forests."
    }
  ],
  "Nagaland": [
    {
      name: "Kohima",
      image_url: "https://example.com/kohima.jpg",
      description: "The capital city, known for its role in World War II and the Hornbill Festival."
    },
    {
      name: "Dzükou Valley",
      image_url: "https://example.com/dzukou.jpg",
      description: "A picturesque valley known for its seasonal flowers and scenic trekking trails."
    },
    {
      name: "Hornbill Festival",
      image_url: "https://example.com/hornbill.jpg",
      description: "A major cultural festival showcasing the traditions of the Naga tribes."
    }
  ],
  "Odisha": [
    {
      name: "Puri Jagannath Temple",
      image_url: "https://example.com/puri.jpg",
      description: "A major Hindu pilgrimage site, famous for its annual Rath Yatra."
    },
    {
      name: "Konark Sun Temple",
      image_url: "https://example.com/konark.jpg",
      description: "A UNESCO World Heritage site, known for its stunning stone carvings."
    },
    {
      name: "Chilika Lake",
      image_url: "https://example.com/chilika.jpg",
      description: "Asia's largest brackish water lagoon, a haven for migratory birds."
    }
  ],
  "Punjab": [
    {
      name: "Golden Temple, Amritsar",
      image_url: "https://example.com/goldentemple.jpg",
      description: "The holiest Gurdwara of Sikhism, known for its stunning architecture and serene ambiance."
    },
    {
      name: "Jallianwala Bagh",
      image_url: "https://example.com/jallianwala.jpg",
      description: "A historic site commemorating the massacre of peaceful protesters in 1919."
    },
    {
      name: "Wagah Border",
      image_url: "https://example.com/wagah.jpg",
      description: "A ceremonial border crossing between India and Pakistan, known for its daily flag-lowering ceremony."
    }
  ],
  "Rajasthan": [
    {
      name: "Jaipur",
      image_url: "https://example.com/jaipur.jpg",
      description: "The capital city, known as the 'Pink City' for its distinctive colored buildings."
    },
    {
      name: "Udaipur",
      image_url: "https://example.com/udaipur.jpg",
      description: "A city of lakes, famous for its palaces and scenic beauty."
    },
    {
      name: "Jaisalmer",
      image_url: "https://example.com/jaisalmer.jpg",
      description: "A desert city known for its golden fort and sand dunes."
    }
  ],
  "Sikkim": [
    {
      name: "Gangtok",
      image_url: "https://example.com/gangtok.jpg",
      description: "The capital city, known for its monasteries and stunning views of the Himalayas."
    },
    {
      name: "Nathula Pass",
      image_url: "https://example.com/nathula.jpg",
      description: "A mountain pass on the Indo-China border, offering breathtaking views."
    },
    {
      name: "Yumthang Valley",
      image_url: "https://example.com/yumthang.jpg",
      description: "A beautiful valley known as the 'Valley of Flowers', famous for its scenic beauty."
    }
  ],
  "Tamil Nadu": [
    {
      name: "Chennai Marina Beach",
      image_url: "https://example.com/marina.jpg",
      description: "One of the longest urban beaches in the world, a popular spot for locals and tourists alike."
    },
    {
      name: "Meenakshi Temple, Madurai",
      image_url: "https://example.com/meenakshi.jpg",
      description: "A historic Hindu temple known for its towering gopurams and intricate sculptures."
    },
    {
      name: "Ooty",
      image_url: "https://example.com/ooty.jpg",
      description: "A famous hill station known for its tea gardens and pleasant climate."
    }
  ],
  "Telangana": [
    {
      name: "Hyderabad Charminar",
      image_url: "https://example.com/charminar.jpg",
      description: "A historic monument and mosque, one of the most recognized symbols of Hyderabad."
    },
    {
      name: "Golconda Fort",
      image_url: "https://example.com/golconda.jpg",
      description: "A massive fortress known for its history, architecture, and acoustics."
    },
    {
      name: "Ramoji Film City",
      image_url: "https://example.com/ramoji.jpg",
      description: "The world's largest film city, a popular tourist destination."
    }
  ],
  "Tripura": [
    {
      name: "Ujjayanta Palace",
      image_url: "https://example.com/ujjayanta.jpg",
      description: "A royal palace turned museum, showcasing the cultural heritage of Tripura."
    },
    {
      name: "Neermahal",
      image_url: "https://example.com/neermahal.jpg",
      description: "A beautiful water palace located in the middle of Rudrasagar Lake."
    },
    {
      name: "Sepahijala Wildlife Sanctuary",
      image_url: "https://example.com/sepahijala.jpg",
      description: "A wildlife sanctuary home to a variety of flora and fauna, including the rare clouded leopard."
    }
  ],
  "Uttar Pradesh": [
    {
      name: "Taj Mahal, Agra",
      image_url: "https://example.com/tajmahal.jpg",
      description: "One of the Seven Wonders of the World, an iconic symbol of love."
    },
    {
      name: "Varanasi",
      image_url: "https://example.com/varanasi.jpg",
      description: "One of the oldest living cities in the world, known for its ghats and temples."
    },
    {
      name: "Fatehpur Sikri",
      image_url: "https://example.com/fatehpur.jpg",
      description: "A historic city built by Emperor Akbar, known for its architectural splendor."
    }
  ],
  "Uttarakhand": [
    {
      name: "Rishikesh",
      image_url: "https://example.com/rishikesh.jpg",
      description: "The 'Yoga Capital of the World', known for its spiritual significance and adventure sports."
    },
    {
      name: "Nainital",
      image_url: "https://example.com/nainital.jpg",
      description: "A picturesque hill station, famous for its lakes and scenic beauty."
    },
    {
      name: "Jim Corbett National Park",
      image_url: "https://example.com/corbett.jpg",
      description: "India's oldest national park, known for its Bengal tiger population."
    }
  ],
  "West Bengal": [
    {
      name: "Darjeeling",
      image_url: "https://example.com/darjeeling.jpg",
      description: "A hill station known for its tea gardens and stunning views of the Kanchenjunga."
    },
    {
      name: "Sundarbans",
      image_url: "https://example.com/sundarbans.jpg",
      description: "A UNESCO World Heritage site, known for its mangrove forests and Royal Bengal Tigers."
    },
    {
      name: "Victoria Memorial, Kolkata",
      image_url: "https://example.com/victoria.jpg",
      description: "A grand marble building, a symbol of the British Raj in India."
    }
  ],"Jammu & Kashmir": [
    {
      name: "Srinagar",
      image_url: "https://example.com/srinagar.jpg",
      description: "Known for its beautiful gardens, lakes, and houseboats, Srinagar is a popular tourist destination."
    },
    {
      name: "Leh-Ladakh",
      image_url: "https://example.com/leh.jpg",
      description: "A region in the northernmost part of India, famous for its stunning landscapes and monasteries."
    },
    {
      name: "Gulmarg",
      image_url: "https://example.com/gulmarg.jpg",
      description: "A popular hill station and skiing destination, known for its scenic beauty."
    }
  ],
  "Delhi": [
    {
      name: "Red Fort",
      image_url: "https://example.com/redfort.jpg",
      description: "A historic fort in Delhi, a symbol of India's rich history and a UNESCO World Heritage site."
    },
    {
      name: "India Gate",
      image_url: "https://example.com/indiagate.jpg",
      description: "A war memorial located in the heart of Delhi, a major tourist attraction."
    },
    {
      name: "Qutub Minar",
      image_url: "https://example.com/qutubminar.jpg",
      description: "The tallest brick minaret in the world, a UNESCO World Heritage site."
    }
  ]
  
};


const TouristPlaces = () => {
  const router = useRouter();
    const { stateName } = useLocalSearchParams();
  const places = touristData[stateName] || [];

  const handlePlaceSelect = (place) => {
    // Navigate back to home with selected place
    router.push('/home', { selectedPlace: place });
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tourist Places in {stateName}</Text>
      <FlatList
        data={places}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePlaceSelect(item)}>
          <View style={styles.placeItem}>
            <Image source={{ uri: item.image_url }} style={styles.image} />
            <Text style={styles.placeName}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  placeItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  placeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default TouristPlaces;
