import React, { useState, useRef } from "react"
import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable, Dimensions } from "react-native"
import { useNavigation } from "@react-navigation/native"
import Icon from "react-native-vector-icons/Feather"

const { width } = Dimensions.get("window")

const DateOfBirthScreen = () => {
  const [dob, setDob] = useState({ day: "", month: "", year: "" })
  const navigation = useNavigation()
  const inputs = useRef([])

  const handleNext = () => {
    navigation.navigate("Location")
  }

  const handleChangeDay = (day) => {
    setDob((prev) => ({ ...prev, day }))
    if (day.length === 2 && Number.parseInt(day) <= 31) {
      inputs.current[1]?.focus()
    }
  }

  const handleChangeMonth = (month) => {
    setDob((prev) => ({ ...prev, month }))
    if (month.length === 2 && Number.parseInt(month) <= 12) {
      inputs.current[2]?.focus()
    }
  }

  const handleChangeYear = (year) => {
    setDob((prev) => ({ ...prev, year }))
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Icon name="calendar" size={40} color="#00695C" style={styles.icon} />
        <Text style={styles.title}>What's your date of birth?</Text>
        <Text style={styles.subtitle}>We use this to verify your age</Text>

        <View style={styles.inputContainer}>
          <TextInput
            
            style={styles.input}
            placeholder="DD"
            placeholderTextColor="#B2DFDB"
            keyboardType="numeric"
            maxLength={2}
            value={dob.day}
            onChangeText={handleChangeDay}
            ref={(el) => (inputs.current[0] = el)}
          />
          <TextInput
            style={styles.input}
            placeholder="MM"
            placeholderTextColor="#B2DFDB"
            keyboardType="numeric"
            maxLength={2}
            value={dob.month}
            onChangeText={handleChangeMonth}
            ref={(el) => (inputs.current[1] = el)}
          />
          <TextInput
            style={[styles.input, { width: 100 }]}
            placeholder="YYYY"
            placeholderTextColor="#B2DFDB"
            keyboardType="numeric"
            maxLength={4}
            value={dob.year}
            onChangeText={handleChangeYear}
            ref={(el) => (inputs.current[2] = el)}
          />
        </View>

        <Text style={styles.note}>You must be 18 years or older to use this app</Text>

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
    backgroundColor: "#F5F5F5",
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
    color: "#004D40",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#00695C",
    marginBottom: 30,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    fontSize: 18,
    color: "#004D40",
    borderWidth: 1,
    borderColor: "#B2DFDB",
    width: 80,
    textAlign: "center",
  },
  note: {
    fontSize: 14,
    color: "#00796B",
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FF7043",
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

export default DateOfBirthScreen

