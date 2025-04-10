import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

const LoginScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Tela de Login</Text>
            <Button type='solid' title={'Home'} buttonStyle={{backgroundColor: 'dodgerblue', padding: 10, marginTop: 20}} onPress={() => navigation.navigate('Home')}></Button>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }})

export default LoginScreen;