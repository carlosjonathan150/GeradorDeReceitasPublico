import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home,PesquisaReceita,Receitas,InfoReceitas} from './src/Telas'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title:"Gerador de Receitas",headerShown:false}}/>
        <Stack.Screen name="PesquisarReceita" component={PesquisaReceita}/>
        <Stack.Screen name="Receitas" component={Receitas}/>
        <Stack.Screen name="InfoReceitas" component={InfoReceitas}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

