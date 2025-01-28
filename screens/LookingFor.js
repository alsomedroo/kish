import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import IonIcons from 'react-native-vector-icons/Ionicons';

const LookingFor = () => {
  const [selectedGender, setSelectedGender] = useState(null); // Tracks the selected gender
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate('HomeTown');
  };

  const toggleGender = (gender) => {
    setSelectedGender((prev) => (prev === gender ? null : gender)); // Deselect if already selected
  };

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === 'android' ? 15 : 0,
        flex: 1,
        backgroundColor: 'white',
      }}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <View style={{marginTop: 80, marginHorizontal: 20}}>
        {/* Row for icon and image */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {/* Icon */}
          <View
            style={{
              width: 44,
              height: 44,
              borderWidth: 2,
              borderRadius: 22,
              borderColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 5,
            }}>
            <IonIcons name="heart-sharp" size={26} color="black" />
          </View>

          {/* Image */}
          <Image
            style={{width: 100, height: 40}}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png',
            }}
          />
        </View>

        {/* Text */}
        <View style={{marginTop: 30}}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              fontFamily: 'Geezapro-Bold',
              marginBottom: 10,
            }}>
            What's your dating intention?
          </Text>

          

          {/* Gender Options */}
          {['Life Partner', 'Long-Term Relationship', 'Long-Term Relationship open to short', 'short-term relationship open to long', 'short-term relationship', 'Figuring out my dating goals'].map((gender) => (
            <TouchableOpacity
              key={gender}
              onPress={() => toggleGender(gender)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <IonIcons
                name={selectedGender === gender ? 'checkbox' : 'square-outline'}
                size={24}
                color="black"
              />
              <Text style={{marginLeft: 10, fontSize: 16}}>{gender}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          onPress={handleNext}
          activeOpacity={0.4}
          style={{marginTop: 40, marginLeft: 'auto'}}>
          <IonIcons
            name="chevron-forward-circle-outline"
            size={44}
            color="purple"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LookingFor;