import React, { useState } from "react"
import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable, Dimensions } from "react-native"
import { useNavigation } from "@react-navigation/native"
import Icon from "react-native-vector-icons/Feather"
import Snackbar from "react-native-snackbar"

const { width } = Dimensions.get("window")

const NameScreen = () => {
  const navigation = useNavigation()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const handleNext = () => {
    if (firstName.trim().length === 0) {
      Snackbar.show({
        text: "Please enter your first name",
        backgroundColor: "#FF7043",
        duration: Snackbar.LENGTH_SHORT,
      })
      return
    }
    navigation.navigate("Email")
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Icon name="user-plus" size={40} color="#00695C" style={styles.icon} />
        <Text style={styles.title}>What's Your Name?</Text>
        <Text style={styles.subtitle}>Let's get to know each other</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor="#757575"
            value={firstName}
            onChangeText={setFirstName}
            autoFocus
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name (Optional)"
            placeholderTextColor="#757575"
            value={lastName}
            onChangeText={setLastName}
          />
        </View>

        <Text style={styles.note}>We value your privacy. No background checks are conducted.</Text>

        <Pressable style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Continue</Text>
          <Icon name="chevron-right" size={20} color="#FFFFFF" />
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5", // Milky white background
  },
  content: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  icon: {
    marginTop: 40,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#004D40", // Darker teal for better contrast
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#00695C", // Dark teal for subtitle
    marginBottom: 30,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    fontSize: 18,
    marginBottom: 15,
    color: "#004D40", // Dark teal for input text
    borderWidth: 1,
    borderColor: "#B2DFDB", // Light teal border
  },
  note: {
    fontSize: 14,
    color: "#00796B", // Medium teal for note
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FF7043", // Keeping coral for the button
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    elevation: 3,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    marginRight: 10,
  },
})

export default NameScreen

