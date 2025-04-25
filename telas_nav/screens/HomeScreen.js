import React from 'react';
import { Icon } from 'react-native-elements';
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

const HomeScreen = ({navigation, contatos}) => {

    const handlePress = (contato) => {
        navigation.navigate('Alteracao', {contato})
    };

    return (
        <View style={styles.container}>
            {/*<Icon name="arrow-back" type='material' onPress={() => navigation.navigate('Login')} containerStyle={styles.backIcon}></Icon>*/}
            <FlatList style={{ flex: 1, width: '100%'}} contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }} data={contatos} keyExtractor={(item) => item.id} renderItem={({item}) => (
                //<Text style={{ fontSize: 18, padding: 10 }}>{item.nome}</Text>
                <ContactCard contato={item} onPress={() => handlePress(item)}/>
            )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100$%',
        padding: 16,
        backgroundColor: '#fff',
    },

})

export default HomeScreen;