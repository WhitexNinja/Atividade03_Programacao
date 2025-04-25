import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ContactCard from '../components/ContactCard';

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
        width: '100%',
        padding: 16,
        backgroundColor: '#fff',
    },

})

export default HomeScreen;