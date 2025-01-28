import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Pressable, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const { width, height } = Dimensions.get('window');

const BasicInfo = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Icon name="user" size={50} color="#00695C" style={styles.icon} />
        <Text style={styles.title}>Discover Your Unique Profile</Text>
        <Text style={styles.subtitle}>Let's create something as special as you are</Text>
        <LottieView
          style={styles.animation}
          source={require('../assets/love.json')}
          autoPlay
          loop
        />
        <Pressable style={styles.button} onPress={() => navigation.navigate('Name')}>
          <Text style={styles.buttonText}>Start Your Journey</Text>
          <Icon name="arrow-right" size={20} color="#FFFFFF" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Milky white background
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#004D40', // Darker teal for better contrast
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#00695C', // Dark teal for subtitle
    textAlign: 'center',
    marginBottom: 30,
  },
  animation: {
    width: width * 0.8,
    height: height * 0.3,
    marginBottom: 30,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF7043', // Keeping coral for the button
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    elevation: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    marginRight: 10,
  },
});

export default BasicInfo;
