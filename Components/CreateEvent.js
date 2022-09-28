import React, { useState} from 'react';
import {Button, Text, View, TextInput, StyleSheet, ScrollView} from 'react-native';


function CreateEvent() {

    //Instantiering af statevariabler, der skal benyttes i LoginForm
    const [eventName, setEventName] = useState('')
    const [location, setLocation] = useState('')
    const [time, setTime] = useState('')
    const [eventType, setEventType] = useState('')
    const [isCompleted, setCompleted] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)


    /*const handleSubmit = async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password).then((data)=>{
            });

        } catch (error){
            setErrorMessage(error.message)
        }
    }*/

    //Her defineres create-knappen, som aktiverer handleSubmit igennem onPress
    const renderButton = () => {
        return <Button onPress={() => handleSubmit()} title="Create" />;
    };


    return (
        <ScrollView style={styles.root}>
        <View>
            <Text style={styles.header}>Create Event</Text>
            <TextInput
                placeholder="EventName"
                value={eventName}
                onChangeText={(eventName) => setEventName(eventName)}
                style={styles.inputField}
            />
            <TextInput
                placeholder="location"
                value={location}
                onChangeText={(location) => setLocation(location) }
                style={styles.inputField}
            />
            <TextInput
                placeholder="time"
                value={time}
                onChangeText={(time) => setTime(time) }
                style={styles.inputField}
            />
            <TextInput
                placeholder="eventType"
                value={eventType}
                onChangeText={(eventType) => setEventType(eventType) }
                style={styles.inputField}
            />
            {errorMessage && (
                <Text style={styles.error}>Error: {errorMessage}</Text>
            )}
            {renderButton()}
        </View>
        </ScrollView>
    );
}

//Lokal styling til brug i LoginFrom
const styles = StyleSheet.create({
    root:{
        paddingTop: 60,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#E2D2FD",
        paddingBottom: 5
    },
    error: {
        color: 'red',
    },
    inputField: {
        borderWidth: 1,
        margin: 10,
        padding: 10,
        backgroundColor: "#FFFFFF"
    },
    header: {
        fontSize: 50,
    },
});

export default CreateEvent