import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Pressable, Dimensions } from "react-native"
import MapView, { Marker } from "react-native-maps"
import { useNavigation } from "@react-navigation/native"
import Icon from "react-native-vector-icons/Feather"

const { width, height } = Dimensions.get("window")

// Updated Dark Mode Map Style
const darkModeStyle = [
  {
    elementType: "geometry",
    stylers: [{ color: "#242f3e" }],
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#746855" }],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#242f3e" }],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b9a76" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#746855" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f2835" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f3d19c" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#17263c" }],
  },
]

const LocationScreen = () => {
  const navigation = useNavigation()
  const [region, setRegion] = useState(null)
  const [location, setLocation] = useState("Loading...")

  const handleNext = () => {
    navigation.navigate("Gender")
  }

  const fetchLocationFromGoogleAPI = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyC6NiDxL-J8pGYQ5tuoOuZxfcrc5sn2qr8`,
        {
          method: "POST",
        },
      )
      const data = await response.json()
      if (data.location) {
        const { lat, lng } = data.location
        const initialRegion = {
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }
        setRegion(initialRegion)
        fetchAddress(lat, lng)
      } else {
        console.log("No location data available")
      }
    } catch (error) {
      console.error("Error fetching location:", error)
    }
  }

  const fetchAddress = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyC6NiDxL-J8pGYQ5tuoOuZxfcrc5sn2qr8`,
      )
      const data = await response.json()
      if (data.results.length > 0) {
        const addressComponents = data.results[0].address_components
        let formattedAddress = ""
        for (const component of addressComponents) {
          if (component.types.includes("sublocality_level_1")) {
            formattedAddress += component.long_name + ", "
          }
          if (component.types.includes("locality")) {
            formattedAddress += component.long_name + ", "
          }
        }
        setLocation(formattedAddress.trim().slice(0, -1))
      } else {
        setLocation("Address not found")
      }
    } catch (error) {
      console.error("Error fetching address:", error)
    }
  }

  useEffect(() => {
    fetchLocationFromGoogleAPI()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />
      <View style={styles.content}>
        <Icon name="map-pin" size={40} color="#00695C" style={styles.icon} />
        <Text style={styles.title}>Where are you located?</Text>
        <Text style={styles.subtitle}>We'll use this to find people near you</Text>

        <View style={styles.mapContainer}>
          <MapView region={region} style={styles.map} customMapStyle={darkModeStyle}>
            {region && (
              <Marker
                coordinate={{
                  latitude: region.latitude,
                  longitude: region.longitude,
                }}
              >
                <View style={styles.markerContainer}>
                  <Icon name="map-pin" size={30} color="#FF7043" />
                </View>
              </Marker>
            )}
          </MapView>
        </View>

        <View style={styles.locationContainer}>
          <Icon name="map-pin" size={20} color="#00695C" />
          <Text style={styles.locationText}>{location}</Text>
        </View>

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
  mapContainer: {
    width: width * 0.9,
    height: height * 0.5,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 20,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  markerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  locationText: {
    fontSize: 16,
    color: "#00695C",
    marginLeft: 10,
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

export default LocationScreen

