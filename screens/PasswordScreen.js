import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable, Dimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Snackbar from 'react-native-snackbar';

const { width } = Dimensions.get('window');

const PasswordScreen = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const email = route?.params?.email;

  const handleNext = () => {
    if (password.length === 0) {
      Snackbar.show({
        text: 'Please enter a valid password',
        backgroundColor: '#FF7043',
        duration: Snackbar.LENGTH_SHORT,
      });
      return;
    }
    navigation.navigate('Otp', { email });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Icon name="lock" size={40} color="#00695C" style={styles.icon} />
        <Text style={styles.title}>Choose a Password</Text>
        <Text style={styles.subtitle}>Make it strong and unique</Text>
        
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Your Password"
            placeholderTextColor="#B2DFDB"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            autoFocus
          />
          <Pressable onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
            <Icon name={showPassword ? "eye" : "eye-off"} size={24} color="#00695C" />
          </Pressable>
        </View>
        
        <Text style={styles.note}>Your details are safe with us</Text>
        
        <Pressable style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Continue</Text>
          <Icon name="chevron-right" size={20} color="#FFFFFF" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  icon: {
    marginTop: 40,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#004D40',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#00695C',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
    position: 'relative',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    fontSize: 18,
    color: '#004D40',
    borderWidth: 1,
    borderColor: '#B2DFDB',
    paddingRight: 50,
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  note: {
    fontSize: 14,
    color: '#00796B',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF7043',
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

export default PasswordScreen;
