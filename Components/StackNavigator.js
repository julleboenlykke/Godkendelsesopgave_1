import {Text, View } from 'react-native';
import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import FullEventPage from "./stackComponents/FullEventPage";
import Create from "./Create";

//Oprettes en Stacknavigator
const Stack = createStackNavigator();

//i return angives der screens som skal bruges med en stacknavigator. Disse er HomeScreen, FullEventPage og Create.
function StackNavigator() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="FullEventPage" component={FullEventPage}/>
            <Stack.Screen name="Create" component={Create}/>
        </Stack.Navigator>
    );
}

export default StackNavigator