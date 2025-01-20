import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Screens
import HomeScreen from '../screens/HomeScreen';
import LikeScreen from '../screens/LikeScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import BasicInfo from '../screens/BasicInfo';
import NameScreen from '../screens/NameScreen';
import EmailScreen from '../screens/EmailScreen';
import OtpScreen from '../screens/OtpScreen';
import PasswordScreen from '../screens/PasswordScreen';
import DateOfBirthScreen from '../screens/DateOfBirthScreen';
import LocationScreen from '../screens/LocationScreen';
import GenderScreen from '../screens/GenderScreen';
import TypeScreen from '../screens/TypeScreen';
import DatingTypeScreen from '../screens/DatingType';
import LookingFor from '../screens/LookingFor';
import HomeTownScreen from '../screens/HomeTownScreen';
import WorkPlace from '../screens/WorkPlace';
import JobTittleScreen from '../screens/JobTittleScreen';
import PhotoScreen from '../screens/PhotoScreen';
import PromptsScreen from '../screens/PromptsScreen';
import ShowPromptsScreen from '../screens/ShowPromptsScreen';
import PreFinalScreen from '../screens/PreFinalScreen';
import WritePromptScreen from '../screens/WritePrompt';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Bottom Tabs Navigator
function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: '#101010'},
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <IonIcons name="shuffle-outline" color="white" size={30} />
            ) : (
              <IonIcons
                style={{paddingTop: 3}}
                name="shuffle-outline"
                color="gray"
                size={30}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Likes"
        component={LikeScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Entypo name="heart" color="white" size={30} />
            ) : (
              <Entypo
                style={{paddingTop: 3}}
                name="heart"
                color="gray"
                size={30}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <MaterialIcons
                name="chat-bubble-outline"
                color="white"
                size={30}
              />
            ) : (
              <MaterialIcons
                style={{paddingTop: 3}}
                name="chat-bubble-outline"
                color="gray"
                size={30}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <IonIcons name="person-circle-outline" color="white" size={28} />
            ) : (
              <IonIcons
                style={{paddingTop: 3}}
                name="person-circle-outline"
                color="gray"
                size={28}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

const AuthStack = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="LogIn"
        component={LoginScreen}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="Basic"
        component={BasicInfo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Name"
        component={NameScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Email"
        component={EmailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Otp"
        component={OtpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Password"
        component={PasswordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Birth"
        component={DateOfBirthScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Location"
        component={LocationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Gender"
        component={GenderScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Type"
        component={TypeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Dating"
        component={DatingTypeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LookingFor"
        component={LookingFor}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeTown"
        component={HomeTownScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WorkPlace"
        component={WorkPlace}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="JobTittle"
        component={JobTittleScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Photos"
        component={PhotoScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Prompts"
        component={PromptsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ShowPrompts"
        component={ShowPromptsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WritePrompts"
        component={WritePromptScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PreFinal"
        component={PreFinalScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
// Main Stack Navigator
function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={BottomTabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

// Main App Component
const StackNavigator = () => {
  return (
    <NavigationContainer>
      <AuthStack/>
      
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
