import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

const UserRegisterScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Nome</Text>
            <TextInput style={styles.input}></TextInput>
            <Text>CPF</Text>
            <TextInput style={styles.input}></TextInput>
            <Text>Email</Text>
            <TextInput style={styles.input}></TextInput>
            <Text>Senha</Text>
            <TextInput style={styles.input}></TextInput>
            <Button type='solid' title={'Salvar'} buttonStyle={{backgroundColor: 'blue', padding: 10, marginTop: 20}}></Button>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        borderWidth: 2,
    }
})

export default UserRegisterScreen;