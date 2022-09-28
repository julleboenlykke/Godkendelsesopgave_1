import {Button, Image, Text, View, StyleSheet, ScrollView} from 'react-native';
import * as React from "react";



//Husk at ændre navn
function FullEventPage({navigation}) {
    return (
        <ScrollView style={styles.root}>
        <View>
            <Button style={styles.button} title="Gå tilbage" onPress={() => navigation.goBack()}/>
            <Image style={styles.event} source={require("../../assets/Event.png")}/>
        </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    root: {
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
       // backgroundColor: "#E2D2FD",
        backgroundColor: "#FFFFFF",
        paddingBottom: 5
    },
    button: {
        alignItems: "left",
    },
    event: {
        height: '350%',
        width: '100%',
        resizeMode: "stretch",
    },
});

export default FullEventPage