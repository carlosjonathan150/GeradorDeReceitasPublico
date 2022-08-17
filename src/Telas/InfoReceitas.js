import * as React from 'react';
import {Text, View,Image} from 'react-native';
import Estilos from '../Estilos'
import { useRoute } from '@react-navigation/native';


export default function InfoReceitas(){
    
    const route = useRoute();

    const [info, setInfo]= React.useState({
        nome: route.params.nome,
        foto: route.params.foto,
        preparo: route.params.preparo,
        ingredientes: route.params.ingredientes
    })
    
    return(
        <View style={{flex:1}}>
            <View style={{flex:0.4,alignSelf:'center',justifyContent:'center'}}>
                <Image
                    source={{uri:info.foto}}
                    style={Estilos.imgInfoReceitas}
                />
            </View>
            <View style={{flex:0.6}}>
                <Text style={Estilos.txtInfoReceitas}>{info.nome}</Text>
                <Text style={Estilos.txtInfoReceitas}>{info.ingredientes}</Text>
                <Text style={Estilos.txtInfoReceitas}>{info.preparo}</Text>
            </View>
        </View>
    )
}

