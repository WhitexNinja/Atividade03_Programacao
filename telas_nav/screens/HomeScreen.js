import React from 'react';
import { Icon } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Icon name="arrow-back" type='material' onPress={() => navigation.navigate('Login')} containerStyle={styles.backIcon}></Icon>
            <Text>Home</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    backIcon: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 1,
    }
})

export default HomeScreen;