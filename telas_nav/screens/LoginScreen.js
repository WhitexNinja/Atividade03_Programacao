import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

const LoginScreen = ({navigation}) => {
    return (
        <View>
            <Text>Tela de Login</Text>
            <Button type='solid' title={'Home'} style={{backgroundColor: 'dodgerblue'}} onPress={() => navigation.navigate('Home')}></Button>
        </View>
    )
};

export default LoginScreen;