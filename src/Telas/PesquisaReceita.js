import * as React from 'react';
import {Text, View,TextInput,Image,TouchableOpacity,FlatList,ScrollView} from 'react-native';
import Estilos from '../Estilos'
import { useNavigation,useRoute } from '@react-navigation/native';
import { useTransitionProgress } from 'react-native-screens';



export default function PesquisaReceita(props){

    const route = useRoute();
    const igredientes = route.params.nome
    const [dados , setDados]= React.useState([
        {id:1 , nome: 'Bolo de Milho', foto: 'https://img.itdg.com.br/tdg/images/recipes/000/000/023/323619/323619_original.jpg?w=1200', preparo: 'Não sei como faz', ingredientes:['Ovos', 'Açúcar', 'Margarina', 'Farinha de Trigo']},
        {id:2 , nome: 'Sorverte', foto: 'https://img.itdg.com.br/tdg/images/blog/uploads/2022/03/sorvete.jpg', preparo: 'Sei la como que faz isso kkkkkk', ingredientes:['Ovos', 'Leite', 'Leite Condesado','Açúcar']}
       ])
    
    const filtro = dados.filter(item=> item.ingredientes.some((elem,index,arr)=> elem == (igredientes[0],igredientes[1],igredientes[2])
    ))

    /*React.useEffect(()=>{
        fetch('http://192.168.100.105:3000/receitas')
            .then((res)=> res.json())
            .then((res)=> setDados(res))
            .catch(()=>alert('Erro ao carregar lista'))
    },[]) */
    
    return(
        <View>
        
                <FlatList
                    data={filtro}
                    renderItem={({item})=> 
                        <TouchableOpacity style={{flexDirection:'row',paddingLeft:20,paddingTop:15,paddingBottom:15,borderBottomWidth:1,borderColor:'#000'}}>
                            <Image
                                source={{uri:item.foto}}
                                style={Estilos.imgReceitas}
                            />
                            <Text style={Estilos.txtReceitas}>{item.nome}</Text> 
                        </TouchableOpacity>
                
                        }
                />

            
        </View>
    )
}