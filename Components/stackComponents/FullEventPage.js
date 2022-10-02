import {Button, Image, View, StyleSheet, ScrollView} from 'react-native';
import * as React from "react";



//FullEventpage komponenten oprettes i et scrollview med en knap der går tilbage og et billede
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

//Lokal styling
const styles = StyleSheet.create({
    root: {
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
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