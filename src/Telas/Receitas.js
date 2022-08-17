import * as React from 'react';
import {Text, View,TextInput,Image,TouchableOpacity,FlatList} from 'react-native';
import Estilos from '../Estilos'
import { useNavigation,useRoute } from '@react-navigation/native';




export default function PesquisaReceita(props){
   
   const [dados, setDados]= React.useState([
    {id:1 , nome: 'Bolo de Milho', foto: 'https://img.itdg.com.br/tdg/images/recipes/000/000/023/323619/323619_original.jpg?w=1200', preparo: 'Não sei como faz', ingredientes:['Ovos', 'Açúcar', 'Margarina', 'Farinha de Trigo']},
    {id:2 , nome: 'Sorverte', foto: 'https://img.itdg.com.br/tdg/images/blog/uploads/2022/03/sorvete.jpg', preparo: 'Sei la como que faz isso kkkkkk', ingredientes:['Ovos', 'Leite', 'Leite Condesado','Açúcar']}
   ])
   
   /* React.useEffect(()=>{
        fetch('http://192.168.100.105:3000/receitas')
            .then((res)=> res.json())
            .then((res)=> setDados(res))
            .catch(()=>alert('Erro ao carregar lista'))
    },[])   
*/
     
    return(
        <View>
            <FlatList
                data={dados}
                renderItem={({item})=> <Config data={item}/>}
            />
        </View>
    )
}

function Config({data}){
    const navigation = useNavigation()
    
    const informaçoes=()=>{
        navigation.navigate('InfoReceitas', {
            nome: data.nome,
            foto: data.foto,
            preparo: data.preparo,
            ingredientes: data.ingredientes
        })
    }

    return(
        <TouchableOpacity onPress={informaçoes} style={{flexDirection:'row',padding:15,borderBottomWidth:1,borderBottomColor:'#000'}}>
                        <Image
                             source={{uri:data.foto}}
                            style={Estilos.imgReceitas}
                        />
                        <Text style={Estilos.txtReceitas}>{data.nome}</Text>
                    </TouchableOpacity>
    )
}