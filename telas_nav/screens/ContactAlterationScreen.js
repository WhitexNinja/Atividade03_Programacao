import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

const ContactAlterationScreen = ({naviagation}) => {
    return (
        <View style={styles.container}>
            <Text>Nome</Text>
            <TextInput style={styles.input}></TextInput>
            <Text>Email</Text>
            <TextInput style={styles.input}></TextInput>
            <Text>Telefone</Text>
            <TextInput style={styles.input}></TextInput>
            <Button type='solid' title={'Alterar'} buttonStyle={{backgroundColor: 'blue', padding: 10, marginTop: 20}}></Button>
            <Button type='solid' title={'Excluir'} buttonStyle={{backgroundColor: 'darkgreen', padding: 10, marginTop: 20}}></Button>
        </View>
    )
}

export default ContactAlterationScreen;