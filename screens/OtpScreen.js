import React, { useState, useRef } from "react"
import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable, Dimensions } from "react-native"
import { useNavigation } from "@react-navigation/native"
import Icon from "react-native-vector-icons/Feather"

const { width } = Dimensions.get("window")

const OtpScreen = () => {
  const navigation = useNavigation()
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const inputs = useRef([])

  const handleChangeText = (text, index) => {
    const newOtp = [...otp]
    newOtp[index] = text
    setOtp(newOtp)

    if (index < 5 && text) {
      inputs.current[index + 1]?.focus()
    }
    if (index === 5 && text) {
      navigation.navigate("Birth")
    }
  }

  const handleKeyPress = (event, index) => {
    if (event.nativeEvent.key === "Backspace") {
      if (index > 0 && !otp[index]) {
        inputs.current[index - 1]?.focus()
      }
    }
  }

  const handleResendOtp = () => {
    // Implement OTP resend logic here
    console.log("Resend OTP")
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Icon name="lock" size={40} color="#00695C" style={styles.icon} />
        <Text style={styles.title}>Verification Code</Text>
        <Text style={styles.subtitle}>Enter the 6-digit code sent to your email</Text>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              value={digit}
              onChangeText={(text) => handleChangeText(text, index)}
              onKeyPress={(event) => handleKeyPress(event, index)}
              keyboardType="numeric"
              maxLength={1}
              ref={(el) => (inputs.current[index] = el)}
            />
          ))}
        </View>

        <Pressable style={styles.resendButton} onPress={handleResendOtp}>
          <Text style={styles.resendText}>Resend Code</Text>
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
    textAlign: "center",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 30,
  },
  otpInput: {
    width: width * 0.13,
    height: width * 0.13,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#00695C", // Dark teal border
    fontSize: 24,
    textAlign: "center",
    backgroundColor: "#FFFFFF",
    color: "#004D40", // Dark teal for input text
  },
  resendButton: {
    marginTop: 20,
  },
  resendText: {
    color: "#FF7043", // Coral for the resend text
    fontSize: 16,
    fontWeight: "600",
  },
})

export default OtpScreen

