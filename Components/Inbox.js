import {StyleSheet, Text, View, Image, ScrollView} from "react-native"
import * as React from "react"

//Inbox komponenten oprettes i et scrollview med tekst og et billede
function Inbox () {
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
                    Inbox
                </Text>
                    <Image style={styles.event} source={require("../assets/Inbox.png")}/>
            </View>
        </ScrollView>
    )
}

//Lokal styling
const styles = StyleSheet.create({
    root: {
        paddingLeft: 10,
        paddingRight:10,
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
        height: "120%",
        width: "100%",
        resizeMode: "stretch",
    },
});

export default Inbox