import React, { useState, useEffect } from 'react';
import { database } from '../../../src/config/firebase';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import styles from '../../../src/styleSheets/Style';
import Home from '../Home';

export default function Principal({navigation}){

    const [ home , setHome ] = useState([]);

    useEffect(()=> {
        database.collection('home').onSnapshot((query) => {
            const list = [];
            query.forEach((doc) => {
                list.push({... doc.data(), id : doc.id});
            })

            setHome(list);

        })
    }, [])
    
    const Descubra01 = () => {
        console.log("sim")
        navigation.navigate("DescubraPapel")
    }


    return( 

    <ScrollView showsHorizontalScrollIndicator={false} style={{backgroundColor: "#FFF"}}>
        
        <View style = {styles.background}>

{/* ------------ PAPEL CONTAINER ------------  */}

                <View   style = {[principal.container, {backgroundColor:'#9BD1FD'}]} >
                    <View style = {principal.containerTop}>
                        {home.map((container) => {
                            return (
                                <Text style= {principal.containerTopTitle} key={container.id}>
                                    {container.titulo}
                                </Text>
                            )
                        })}
                        
                        <Image style={principal.containerTopImg} source={require('../../../src/assets/imgs/Principal/Papel.png')}/>
                    </View>
                    <View style = {principal.containerText}>
                        <Text style={principal.containerTextContents}></Text>
                    </View>
                </View>
                    <View style = {principal.containerButtom}>
                        <TouchableOpacity style = {[principal.containerButtomPress1, {backgroundColor:'#2DA1FD'}]} onPress= {() => Descubra01()}>
                            <Text style = {principal.containerButtomText}>Descubra</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {[principal.containerButtomPress2, {backgroundColor:'#9BD1FD'}]}>
                            <Text style = {principal.containerButtomText}>Quiz</Text>
                        </TouchableOpacity>
                    </View>

        </View>
    </ScrollView>

    );
}

const principal = StyleSheet.create({
    
      containerTop:{
        height: '30%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
    
      },
    
      containerTopTitle:{
        marginBottom: 5,
        fontSize: 40,
        fontFamily: 'Roboto'
      },
    
      containerTopImg:{
        marginLeft: 10,
        width: 65,
        height: 50,
        transform: [{ rotate: '15deg' }]
    
      },
    
      containerTopPnts:{
        width: 'auto',
        height: 'auto',
        marginBottom: 'auto',
        marginLeft: 'auto',
        fontSize: 15,
        fontFamily: 'Cabin-Regular.ttf',
        color: 'rgba(0, 71, 7, 0.82)',
        
      },
    
      containerText:{
        height: '60%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: 15,
        marginRight: 15
      },
    
      containerTextContents:{
        fontSize: 12,
        fontFamily: 'Cabin-Regular.ttf',
        color: 'black',
      },
    
      containerButtom:{
        height: 60,
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 50,
        marginTop: -10,
      },
    
      containerButtomText:{
        fontSize: 15,
        color: 'black',
        fontFamily: 'Cabin-Regular.ttf',
        marginLeft: 5,
        marginRight:5,
      },
    
    // CONTAINER 
    
      container:{
        height: 200,
        width: '80%',
        margin: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
        borderTopStartRadius: 6,
        borderTopEndRadius: 6,
        borderBottomStartRadius: 3,
        borderBottomEndRadius: 3,
      },
    
      containerButtomPress1:{
        width: '48.5%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        margin: 0,
        borderTopStartRadius: 3,
        borderTopEndRadius: 3,
        borderBottomStartRadius: 6,
        borderBottomEndRadius: 3,
        marginRight: 5,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        
        elevation: 6,
      },
    
      containerButtomPress2:{
        width: '48.5%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        margin: 0,
        borderTopStartRadius: 3,
        borderTopEndRadius: 3,
        borderBottomStartRadius: 3,
        borderBottomEndRadius: 6,
        marginLeft: 5,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        
        elevation: 6,
        
      },
    
});