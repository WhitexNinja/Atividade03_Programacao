import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import UserRegisterScreen from './screens/UserRegisterScreen';
import ContactRegisterScreen from './screens/ContactRegisterScreen';
import ContactAlterationScreen from './screens/ContactAlterationScreen';

const Stack = createStackNavigator();

export default function App() {

  const[contatos, setContatos] = useState([
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
  ]);

  const adicionarContato = (nome, email, telefone) => {
    const novoId = (contatos.length + 1).toString();
    const novoContato = {id: novoId, nome, email, telefone};
    setContatos([...contatos, novoContato]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{  headerStyle:{backgroundColor: 'blue'}, headerTintColor:'white', headerShown: true }}>
        <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Home' options={({navigation}) => ({headerTitleAlign: 'center', title: 'Lista de Contatos', headerRight: () => (<Icon name='add' type='material' color='white' containerStyle={{marginRight: 15}} onPress={() => navigation.navigate('Contato')}/>)})}> {props => <HomeScreen {...props} contatos={contatos}/>}</Stack.Screen>
        <Stack.Screen name='Usuário' component={UserRegisterScreen} options={{ headerTitleAlign: 'center', title:'Usuário' }} />
        <Stack.Screen name='Contato' options={{ headerTitleAlign: 'center', title:'Contato' }}> {props => <ContactRegisterScreen {...props} adicionarContato={adicionarContato} />}</Stack.Screen> 
        <Stack.Screen name='Alteracao' component={ContactAlterationScreen} options={{ headerTitleAlign: 'center', title:'Contato' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}