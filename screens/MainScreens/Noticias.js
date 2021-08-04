import React, {useState} from 'react';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Text, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons'
import { IconButton } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import styles from '../../src/styleSheets/Style';

export default function Noticias({}){

    const [Like , setLike] = useState(false);

    const agregarFavoritos = () => {
        setLike(!Like);
    };

    return( 
    
    <ScrollView showsHorizontalScrollIndicator={false} style={{backgroundColor: '#fff'}}>
        <View style = {styles.background}>

                
                <View style={styles.menu}>
                    <TouchableOpacity>
                        <Icon name='menu' color = '#45B19D' size={50}/>
                    </TouchableOpacity>
                </View>



            <View style = {noticias.container}>
                <View style = {noticias.text}>
                    <View Style = {noticias.maintext}>
                        <Text style = {{fontSize: 15, fontFamily: 'Cabin-Regular.ttf', fontWeight: 'bold', color: '#000', marginBottom: 2.5,}}>
                            Composteira de Garrafa PET
                        </Text>
                        <Text style = {{fontSize: 12, fontFamily: 'Raleway-Regular.ttf', fontWeight: '100', color: '#000'}}>
                            Sed ipsum odio, placerat ut ullamcorper a, ullamcorper blandit lectus. Morbi luctus, nisi et vehicula sagittis, metus nibh suscipit.
                        </Text>
                    </View>
                </View>
                <View style = {noticias.img}/>
                <View style = {noticias.like}>
                        <IconButton style={noticias.likeIcon} icon={"heart-outline"} size={30}/>
                </View>
            </View>
            
            <View style = {noticias.container}>
                <View style = {noticias.img2}/>
                <View style = {noticias.text2}>
                    <View Style = {noticias.maintext}>
                        <Text style = {{fontSize: 15, fontFamily: 'Cabin-Regular.ttf', fontWeight: 'bold', color: '#000', marginBottom: 2.5,}}>
                            Customização de Roupa
                        </Text>
                        <Text style = {{fontSize: 12, fontFamily: 'Raleway-Regular.ttf', fontWeight: '100', color: '#000'}}>
                            Sed ipsum odio, placerat ut ullamcorper a, ullamcorper blandit lectus. Morbi luctus, nisi et vehicula sagittis, metus nibh suscipit.
                        </Text>
                    </View>
                </View>
                <View style = {noticias.like}>
                        <IconButton style={noticias.likeIcon} icon={"heart-outline"} size={30}/>
                </View>
            </View>
            <View style = {noticias.container}>
                <View style = {noticias.text}>
                    <View Style = {noticias.maintext}>
                        <Text style = {{fontSize: 15, fontFamily: 'Cabin-Regular.ttf', fontWeight: 'bold', color: '#000', marginBottom: 2.5,}}>
                            Composteira de Garrafa PET
                        </Text>
                        <Text style = {{fontSize: 12, fontFamily: 'Raleway-Regular.ttf', fontWeight: '100', color: '#000'}}>
                            Sed ipsum odio, placerat ut ullamcorper a, ullamcorper blandit lectus. Morbi luctus, nisi et vehicula sagittis, metus nibh suscipit.
                        </Text>
                    </View>
                </View>
                <View style = {noticias.img}/>
                <View style = {noticias.like}>
                        <IconButton style={noticias.likeIcon} icon={"heart-outline"} size={30}/>
                </View>
            </View>
            
            <View style = {noticias.container}>
                <View style = {noticias.img2}/>
                <View style = {noticias.text2}>
                    <View Style = {noticias.maintext}>
                        <Text style = {{fontSize: 15, fontFamily: 'Cabin-Regular.ttf', fontWeight: 'bold', color: '#000', marginBottom: 2.5,}}>
                            Customização de Roupa
                        </Text>
                        <Text style = {{fontSize: 12, fontFamily: 'Raleway-Regular.ttf', fontWeight: '100', color: '#000'}}>
                            Sed ipsum odio, placerat ut ullamcorper a, ullamcorper blandit lectus. Morbi luctus, nisi et vehicula sagittis, metus nibh suscipit.
                        </Text>
                    </View>
                </View>
                <View style = {noticias.like}>
                        <IconButton style={noticias.likeIcon} icon={"heart-outline"} size={30}/>
                </View>
            </View>


        </View>
    </ScrollView>

    );
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
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    text:{
        width: '50%',
        height: '80%',
        marginHorizontal: 10,
    },

    maintext:{
        width: '90%',
        height: '30%',
        backgroundColor: 'black',
    },

    img:{
        backgroundColor: '#8DE170',
        width: '30%',
        height: '75%',
        borderRadius: 2,
    },

    like:{
        width: '10%',
        height: '90%',
        marginRight: 5,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        
    },

    text2:{
        width: '50%',
        height: '80%',
        marginLeft: 10,
    },

    img2:{
        backgroundColor: '#6ED1D8',
        width: '30%',
        height: '75%',
        borderRadius: 2,
        marginLeft: 10,
    },

});