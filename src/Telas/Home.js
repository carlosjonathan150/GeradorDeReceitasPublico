import * as React from 'react';
import {Text, View,TextInput,Image,TouchableOpacity,FlatList} from 'react-native';
import Estilos from '../Estilos'
import { useNavigation } from '@react-navigation/native';
import Header from '../Componentes/Header'

const Receitas = [
    {id:1, nome:'Leite', foto:'https://http2.mlstatic.com/D_NQ_NP_771955-MLU47592171688_092021-O.jpg'},
    {id:2, nome:'Ovos', foto:'https://s2.glbimg.com/fZMzrfgqSWZ_Xe5gVhGT2VXTfeA=/0x0:800x450/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/l/9/8q0uY5QfyTiNwLAn5ZdQ/1-getty.jpg'},
    {id:3, nome:'Margarina', foto:'https://hiperideal.vteximg.com.br/arquivos/ids/178965-1000-1000/2053403.jpg?v=637234405622970000'},
    {id:4, nome:'Açúcar', foto:'https://www.vitalmed.com.br/wp-content/uploads/2019/08/acucar_vitalmed.jpg'},
    {id:5, nome:'Farinha de Trigo', foto:'https://img.itdg.com.br/tdg/images/blog/uploads/2018/10/tipos-de-farinha-de-trigo-veja.jpg?w=1200'},
    {id:6, nome:'Leite Condesado', foto:'https://img.itdg.com.br/tdg/images/recipes/000/002/921/354698/354698_original.jpg?mode=crop&width=710&height=400'},
    {id:7, nome:'Creme de leite', foto:'https://img.itdg.com.br/tdg/images/blog/uploads/2019/07/Creme-de-leite-fresco-caseiro-de-caixinha-e-mais.jpg'},
    {id:8, nome:'Achocolatado em pó', foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt9tN29fepPv4ivBgxB_NOfMWzsqJ1XYuRXQ&usqp=CAU'},
    
]

export default function Home(props) {
   
   const [ingrendientes, setIngredientes] = React.useState(Receitas);
   const [lista, setLista]= React.useState([])
   const [pesquisa,setPesquisa]= React.useState('')
   const navigation = useNavigation()

   
  
    async function pesquisar(){        
      let nome = lista
        if (nome.length <3 ){
            alert('Insira no minimo 3 Ingredientre')
        }else {
            navigation.navigate('PesquisarReceita',{
                nome:nome
            })
        }

    }
    const pesquisar2=()=> props.navigation.navigate('Receitas')

   React.useEffect (() => {
    if(pesquisa === '') {
       setIngredientes(Receitas);
    }else {
      setIngredientes(Receitas.filter((item)=>item.nome.toLowerCase().indexOf(pesquisa.toLowerCase())>-1));  
    }
},[pesquisa])
   
    function Config({data}){
        return(
            <View style={Estilos.configList}>
                <Image 
                     source={{uri:data.foto}}
                    style={Estilos.imgList}
                />
                <View>
                    <Text style={Estilos.txtList}>{data.nome}</Text>
                </View>
                    <View style={{flex:1,alignItems:'flex-end'}}>
                        <TouchableOpacity onPress={()=>adicionar(data)}>
                        <Image 
                            source={require('../../assets/img/mais.png')}
                            style={Estilos.iconList}
                        />
                        </TouchableOpacity>
                    </View>
            </View>
            
        )
    }

    
    function  adicionar(data){
        let nomes = data.nome
            setLista([...lista,nomes])     
    }

        const deleteItem = (index)=>{
            const array = [...lista]
            array.splice(index,1);
            setLista(array)  
      }; 
   
    return(
        <View  style={{flex:1}}>
            <Header/>
            <View style={Estilos.containerInput}>
                <TextInput
                    placeholder='Pesquisar ingredientes'
                    style={Estilos.textInput}
                    onChangeText={setPesquisa}
                    value={pesquisa}
                />
            </View>
            <View style={{flex:0.53,marginBottom:10}}>
                <FlatList
                    data={ingrendientes}
                    keyExtractor={item=>item.id}
                    renderItem={({item})=><Config data={item}/>}                
                />
            </View>
            <View style={{flex:0.3}}>    
                <View style={Estilos.containerList}>
                <FlatList
                    data={lista}
                    renderItem={({item, index})=> 
                        <View style={Estilos.listaPesquisa}>
                            <Text style={{paddingTop:12,paddingLeft:7,paddingBottom:15}}>{item}</Text>
                            <TouchableOpacity onPress={()=> deleteItem(index)}>
                                <Image
                                    source={require('../../assets/img/delete.png')}
                                    style={Estilos.iconDelete}
                                />
                            </TouchableOpacity>
                        </View>
                    }               
                />
                </View>
            </View>
            <View style={{flex:0.22,alignItems:'center',justifyContent:'center'}}>
            
            <TouchableOpacity style={Estilos.btn} onPress={pesquisar2}>
                    <Text>
                        Todas as Receita
                    </Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={Estilos.btn} onPress={()=>pesquisar()}>
                    <Text>
                        Pesquisar Receita
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

