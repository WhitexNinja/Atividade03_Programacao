import React from 'react';
import { Icon } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ContactCard from '../components/ContactCard';

const contatos = [
    {
        id: '1',
        nome: 'Marcos Andrade',
        email: 'marcos.andrade@gmail.com',
        telefone: '81988553424'
    },

    {
        id: '2',
        nome: 'Patrícia Tavares',
        email: 'patricia.tavares@gmail.com',
        telefone: '81998765332'
    },

    {
        id: '3',
        nome: 'Rodrigo Antunes',
        email: 'rodrigo.antunes@gmail.com',
        telefone: '81987765525'
    },
];

const HomeScreen = ({navigation}) => {
    const handlePress = (contato) => {
        navigation.navigate('Alteracao', {contato})
    };

    return (
        <View style={styles.container}>
            {/*<Icon name="arrow-back" type='material' onPress={() => navigation.navigate('Login')} containerStyle={styles.backIcon}></Icon>*/}
            <FlatList data={contatos} keyExtractor={(item) => item.id} renderItem={({item}) => (
                <ContactCard contato={item} onPress={() => handlePress(item)}/>
            )}
            />
        </View>
    );
}

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