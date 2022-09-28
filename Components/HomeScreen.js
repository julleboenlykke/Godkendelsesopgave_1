import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from "react-native"
import * as React from "react";
import FullEventPage from "./stackComponents/FullEventPage";

const navController = (navigation, route) => {
    navigation.navigate(route)
}


function HomeScreen ({navigation}) {
    return (
        <ScrollView style={styles.root}>
        <View>
            <Text style={{
                fontSize: 70,
                fontWeight: 'bold',
                justifyContent: 'center',
                textAlign: 'center',
                color: '#A07FD8',
                paddingTop: 55,
                paddingBottom: 30}}>
                MeetMe
            </Text>
        </View>

        <View>
            <Text style={styles.text}>Recommended for you</Text>
            <TouchableOpacity onPress={() => navController(navigation, "FullEventPage")} >
                <Image style={styles.event} source={require("../assets/StrikkeKlub.png")}/>
            </TouchableOpacity>
        </View>

        <View>
            <Text style={styles.text}>Popular interests{'\n'}{'\n'}{'\n'}{'\n'}</Text>
        </View>

        <View>
            <Text style={styles.text}>Close by</Text>
            <Image style={styles.event} source={require("../assets/Teater.png")}/>
            <Text>{'\n'}</Text>
            <Image style={styles.event} source={require("../assets/Padel.png")}/>
            <Text>{'\n'}</Text>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        paddingLeft: 10,
        paddingRight:10,
       // backgroundColor: "#E2D2FD",
        backgroundColor: "#FFFFFF",
    },
    text: {
        textAlign: 'left',
        paddingBottom: 15,
        paddingTop: 25,
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: 12,
    },
    event: {
        height: 150,
        width: 350,
        resizeMode: "stretch",
    },
});

export default HomeScreen