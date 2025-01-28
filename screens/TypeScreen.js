import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const { width } = Dimensions.get('window');

const TypeScreen = () => {
  const [selectedType, setSelectedType] = useState(null);
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate('Dating');
  };

  const toggleType = (type) => {
    setSelectedType((prev) => (prev === type ? null : type));
  };

  const typeOptions = ['Straight', 'Gay', 'Lesbian', 'Bisexual'];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Icon name="heart" size={40} color="#00695C" style={styles.icon} />
        <Text style={styles.title}>What's your sexuality?</Text>
        <Text style={styles.subtitle}>
          This helps us find the best matches for you. You can always update this later.
        </Text>

        <View style={styles.optionsContainer}>
          {typeOptions.map((type) => (
            <TouchableOpacity
              key={type}
              onPress={() => toggleType(type)}
              style={[
                styles.option,
                selectedType === type && styles.selectedOption,
              ]}
            >
              <Icon
                name={selectedType === type ? 'check-square' : 'square'}
                size={24}
                color={selectedType === type ? '#FF7043' : '#00695C'}
              />
              <Text style={[
                styles.optionText,
                selectedType === type && styles.selectedOptionText
              ]}>
                {type}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Continue</Text>
          <Icon name="chevron-right" size={20} color="#FFFFFF" />
        </TouchableOpacity>
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
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#00695C',
    marginBottom: 30,
    textAlign: 'center',
  },
  optionsContainer: {
    width: '100%',
    marginBottom: 30,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#B2DFDB',
  },
  selectedOption: {
    borderColor: '#FF7043',
    backgroundColor: '#FFF3E0',
  },
  optionText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#004D40',
  },
  selectedOptionText: {
    color: '#FF7043',
    fontWeight: 'bold',
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

export default TypeScreen;
