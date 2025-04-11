import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button, Avatar } from 'react-native-elements';

const LoginScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Avatar
                size="xlarge"
                rounded
                source={{
                  uri:
                    'https://avatars.githubusercontent.com/u/152277272?s=400&u=c2db24400bb47417a550ac75630c57dc4e292f26&v=4'
                }}/>
            <Text>Login</Text>
            <TextInput style={styles.input}></TextInput>
            <Text>Senha</Text>
            <TextInput style={styles.input}></TextInput>
            <Button type='solid' title={'Login'} buttonStyle={{backgroundColor: 'blue', padding: 10, marginTop: 20}} onPress={() => navigation.navigate('Home')}></Button>
            <Button type='solid' title={'Cadastre-se'} buttonStyle={{backgroundColor: 'darkgreen', padding: 10, marginTop: 20}} onPress={() => navigation.navigate('Usuário')}></Button>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    input:{
        borderColor: 'black',
        borderWidth: 2,
    }

},

)

export default LoginScreen;