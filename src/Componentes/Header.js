import * as React from 'react';
import {Text, View,Image,TouchableOpacity,SafeAreaView} from 'react-native';

export default function Header(){
    return(
        <SafeAreaView style={{width:'100%', height:'7%', backgroundColor:'#ff7f50',justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:18,fontWeight:'500'}}>GERADOR DE RECEITAS</Text>
        </SafeAreaView>
    )
}