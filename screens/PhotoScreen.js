import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  StatusBar,
  Image,
  Pressable,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
//import EvilIcon from 'react-native-vector-icons/evil-icons';

const PhotoScreen = () => {
  const [imageUrls, setImageUrls] = useState(['', '', '', '', '', '']);
  const [imageUrl, setImageUrl] = useState('');
  const navigation = useNavigation();

  const handleAddImage = () => {
    // Add image to the array
    const index = imageUrls?.findIndex(url => url === '');
    if (index !== -1) {
      const updatedUrls = [...imageUrls];
      updatedUrls[index] = imageUrl;
      setImageUrls(updatedUrls);
      setImageUrl('');
    }
  };
  const handleNext = () => {
    navigation.navigate('Prompts');
  }
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === 'android' ? 35 : 0,
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View style={{marginTop: 30, marginHorizontal: 20}}>
        {/* Row for icon and image */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 0,
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
            }}></View>

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
            }}>
            Pick your Photos and videos
          </Text>

          <View style={{marginTop: 20}}>
            <View
              style={{flexDirection: 'row', alignItems: 'center', gap: '20'}}>
              {imageUrls?.slice(0, 3).map((url, index) => (
                <Pressable
                  style={{
                    borderColor: '#581845',
                    borderWidth: url ? 0 : 2,
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderStyle: 'dashed',
                    borderRadius: 10,
                    height: 100,
                    marginRight: 10, // Add margin for spacing between boxes
                  }}
                  key={index}>
                  {url ? (
                    <Image
                      style={{
                        width: '100%',
                        height: 100,
                        borderRadius: 10,
                        resizeMode: 'cover',
                      }}
                      source={{uri: url}}
                    />
                  ) : (
                    <View
                      style={{
                        width: 44,
                        height: 44,
                        borderWidth: 2,
                        borderRadius: 22,
                        borderColor: 'black',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <IonIcons name="image-outline" size={32} color="black" />
                    </View>
                  )}
                </Pressable>
              ))}
            </View>
          </View>
          <View style={{marginTop: 20}}>
            <View
              style={{flexDirection: 'row', alignItems: 'center', gap: '20'}}>
              {imageUrls?.slice(3, 6).map((url, index) => (
                <Pressable
                  style={{
                    borderColor: '#581845',
                    borderWidth: url ? 0 : 2,
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderStyle: 'dashed',
                    borderRadius: 10,
                    height: 100,
                    marginRight: 10, // Add margin for spacing between boxes
                  }}
                  key={`second-row-${index}`}>
                  {' '}
                  {/* Updated key */}
                  {url ? (
                    <Image
                      style={{
                        width: '100%',
                        height: 100,
                        borderRadius: 10,
                        resizeMode: 'cover',
                      }}
                      source={{uri: url}}
                    />
                  ) : (
                    <View
                      style={{
                        width: 44,
                        height: 44,
                        borderWidth: 2,
                        borderRadius: 22,
                        borderColor: 'black',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <IonIcons name="image-outline" size={32} color="black" />
                    </View>
                  )}
                </Pressable>
              ))}
            </View>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={{color: 'gray'}}>Drag to reorder</Text>
            <Text style={{color: '#581845', fontWeight: 'bold', fontSize: 20}}>
              Add four to six photos
            </Text>
          </View>
          <View style={{marginTop: 30}}>
            <Text>Add a picture of yourself</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 5,
                paddingHorizontal: 10,
                marginTop: 10,
                paddingVertical: 5,
              }}>
              <TextInput
                value={imageUrl}
                onChangeText={text => setImageUrl(text)}
                style={{flex: 1, marginRight: 10}}
                placeholder="Enter your image URL"
                placeholderTextColor={'gray'}
              />
              <IonIcons name="image-outline" size={32} color="black" />
            </View>
            <Button
              style={{marginTop: 20}}
              onPress={handleAddImage}
              title="Add Image"
            />
          </View>
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

export default PhotoScreen;

const styles = StyleSheet.create({});
