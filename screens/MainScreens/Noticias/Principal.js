import React, {useState} from 'react';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons'
import { IconButton } from 'react-native-paper';
import {} from '@expo-google-fonts/cabin' 


import styles from '../../../src/styleSheets/Style';

export default function Principal({navigation}){

    const [Like , setLike] = useState(false);

    const agregarFavoritos = () => {
        setLike(!Like);
    };

    return(    
    <ScrollView showsHorizontalScrollIndicator={false} style={{backgroundColor: '#fff'}}>
        <View style = {styles.background}>

                
                <View style={styles.menu}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Icon name='menu' color = '#45B19D' size={50}/>
                    </TouchableOpacity>
                </View>



            <View style = {noticias.container}>
                <View style = {[noticias.img, {backgroundColor: '#FB9696',}]}/>
                <View style = {noticias.bottomCont}>
                    <View style = {noticias.text}>
                        <View Style = {noticias.maintext}>
                            <Text style = {{fontSize: 15, fontFamily: 'Cabin_600SemiBold', fontWeight: 'bold', color: '#000', marginBottom: 2.5,}}>
                                Países mais sustentáveis do mundo 
                            </Text>
                        </View>
                    </View>
                    <View style = {noticias.like}>
                            <IconButton style={noticias.likeIcon} icon={"heart-outline"} size={30}/>
                    </View>
                </View>
            </View>

            <View style = {noticias.container}>
                <View style = {[noticias.img, {backgroundColor: '#8DE170',}]}/>
                <View style = {noticias.bottomCont}>
                    <View style = {noticias.text}>
                        <View Style = {noticias.maintext}>
                            <Text style = {{fontSize: 15, fontFamily: 'Cabin_600SemiBold', fontWeight: 'bold', color: '#000', marginBottom: 2.5,}}>
                                Conheça a escova de dente de Bambu 
                            </Text>
                        </View>
                    </View>
                    <View style = {noticias.like}>
                            <IconButton style={noticias.likeIcon} icon={"heart-outline"} size={30}/>
                    </View>
                </View>
            </View>

            <View style = {noticias.container}>
                <View style = {[noticias.img, {backgroundColor: '#6ED1D8',}]}/>
                <View style = {noticias.bottomCont}>
                    <View style = {noticias.text}>
                        <View Style = {noticias.maintext}>
                            <Text style = {{fontSize: 15, fontFamily: 'Cabin_600SemiBold', fontWeight: 'bold', color: '#000', marginBottom: 2.5,}}>
                                Agenda 2030 da ONU 
                            </Text>
                        </View>
                    </View>
                    <View style = {noticias.like}>
                            <IconButton style={noticias.likeIcon} icon={"heart-outline"} size={30}/>
                    </View>
                </View>
            </View>


        </View>
    </ScrollView>

    )
}

const noticias = StyleSheet.create({

    container:{

        borderRadius: 5,
        width: '90%',
        height: 150,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3,
        marginTop: 50,
        alignItems: 'center',
    },

    bottomCont:{
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        height: '40%',
    },

    text:{
        width: '85%',
        height: '100%',
        marginLeft: 10,
        marginRight: 5,
        justifyContent: 'center',

    },

    img:{
        width: '100%',
        height: '60%',
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },

    like:{
        width: '10%',
        height: '100%',
        marginRight: 5,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding:0,
        alignItems: 'center',
    },

});