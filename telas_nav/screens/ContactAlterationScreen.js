import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

const ContactAlterationScreen = ({route}) => {
    const contato = route?.params?.contato;
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    useEffect(() => {
        if (contato) {
          setNome(contato.nome);
          setEmail(contato.email);
          setTelefone(contato.telefone);
        }
      }, [contato]);
    
      if (!contato) {
        return (
          <View style={styles.container}>
            <Text>Contato não encontrado.</Text>
          </View>
        );
      }

    return (
        <View style={styles.container}>
            <Text>Nome</Text>
            <TextInput style={styles.input} value={nome} onChangeText={setNome}></TextInput>
            <Text>Email</Text>
            <TextInput style={styles.input} value={email} onChangeText={setEmail}></TextInput>
            <Text>Telefone</Text>
            <TextInput style={styles.input} value={telefone} onChange={setTelefone}></TextInput>
            <Button type='solid' title={'Alterar'} buttonStyle={{backgroundColor: 'blue', padding: 10, marginTop: 20}}></Button>
            <Button type='solid' title={'Excluir'} buttonStyle={{backgroundColor: 'darkgreen', padding: 10, marginTop: 20}}></Button>
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

export default ContactAlterationScreen;