import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import StackNavigator from "./Components/StackNavigator";
import Ionicons from "react-native-vector-icons/Ionicons";
import Inbox from "./Components/Inbox";
import Profile from "./Components/Profile";
import firebase from "firebase/compat";
import Create from "./Components/Create"
import Events from "./Components/Events"
import HomeScreen from "./Components/HomeScreen";

const Tab = createBottomTabNavigator()


export default function App() {
    const firebaseConfig = {
        apiKey: "AIzaSyB5I8iY3oYslpxVBVxZCTBJkOwSmVpT2g8",
        authDomain: "godkendelsesopgave1-database.firebaseapp.com",
        databaseURL: "https://godkendelsesopgave1-database-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "godkendelsesopgave1-database",
        storageBucket: "godkendelsesopgave1-database.appspot.com",
        messagingSenderId: "751209213369",
        appId: "1:751209213369:web:6317e2a614cc17bfc61a68"
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

  return (
      <NavigationContainer style={styles.container}>
        <Tab.Navigator  screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: '#A07FD8',
            tabBarInactiveTintColor: '#A07FD8',
            tabBarStyle: {
                backgroundColor: '#E2D2FD',

            },
            tabBarIcon: ({ color, size }) => {
                if (route.name === 'Home') {
                    return (
                        <Ionicons name={'home-outline'} size={size} color={color}/>
                    );
                } else if (route.name === 'Events') {
                    return (
                        <Ionicons name='calendar' size={size} color={color}/>
                    );
                } else if (route.name === 'Inbox') {
                    return (
                        <Ionicons name='chatbubbles' size={size} color={color}/>
                    );
                } else if (route.name === 'Profile') {
                    return (
                        <Ionicons name='person' size={size} color={color}/>
                    );
                }
            },
        })}>
            <Tab.Screen name="Home" component={StackNavigator}/>
            <Tab.Screen name="Events" component={Events}/>
            <Tab.Screen name="Inbox" component={Inbox}/>
            <Tab.Screen name="Profile" component={Profile}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E2D2FD',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
