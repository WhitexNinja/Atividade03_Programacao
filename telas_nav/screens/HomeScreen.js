import React from 'react';
import { Button } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default HomeScreen;