import React from 'react';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import styles from '../../src/styleSheets/Style';

export default function Principal(){

    return( 
    
    <ScrollView showsHorizontalScrollIndicator={false} style={{backgroundColor: "#FFF"}}>
        <View style = {styles.background}>

{/* ------------ PAPEL PRIMEIRO CONTAINER ------------  */}

                <View style = {principal.container1} >
                    <View style = {principal.containerTop}>
                        <Text style ={principal.containerTopTitle}>Plástico</Text>
                        <Image style={principal.containerTopImg} source={require('../../src/assets/imgs/Principal/Papel.png')}/>
                    </View>
                    <View style = {principal.containerText}>
                        <Text style={principal.containerTextContents}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor lorem lacus, sed tincidunt velit ornare lobortis. Phasellus laoreet vel lectus at tempus. Praesent sed tortor id null.</Text>
                    </View>
                </View>
                    <View style = {principal.containerButtom}>
                        <TouchableOpacity style = {principal.container1ButtomPress1}>
                            <Text style = {principal.containerButtomText}>Descubra</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {principal.container1ButtomPress2}>
                            <Text style = {principal.containerButtomText}>Quiz</Text>
                        </TouchableOpacity>
                    </View>

{/* ------------ VIDRO SEGUNDO CONTAINER ------------  */}

                <View style = {principal.container2} >
                    <View style = {principal.containerTop}>
                        <Text style ={principal.containerTopTitle}>Metal</Text>
                        <Image style={principal.containerTopImg} source={require('../../src/assets/imgs/Principal/Papel.png')}/>
                    </View>
                    <View style = {principal.containerText}>
                        <Text style={principal.containerTextContents}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor lorem lacus, sed tincidunt velit ornare lobortis. Phasellus laoreet vel lectus at tempus. Praesent sed tortor id null.</Text>
                    </View>
                </View>
                    <View style = {principal.containerButtom}>
                        <TouchableOpacity style = {principal.container2ButtomPress1}>
                            <Text style = {principal.containerButtomText}>Descubra</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {principal.container2ButtomPress2}>
                            <Text style = {principal.containerButtomText}>Quiz</Text>
                        </TouchableOpacity>
                    </View>

{/* ------------ ORGÂNICO TERCEIRO CONTAINER ------------  */}

                <View style = {principal.container3} >
                    <View style = {principal.containerTop}>
                        <Text style ={principal.containerTopTitle}>Papel</Text>
                        <Image style={principal.containerTopImg} source={require('../../src/assets/imgs/Principal/Papel.png')}/>
                    </View>
                    <View style = {principal.containerText}>
                        <Text style={principal.containerTextContents}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor lorem lacus, sed tincidunt velit ornare lobortis. Phasellus laoreet vel lectus at tempus. Praesent sed tortor id null.</Text>
                    </View>
                </View>
                    <View style = {principal.containerButtom}>
                        <TouchableOpacity style = {principal.container3ButtomPress1}>
                            <Text style = {principal.containerButtomText}>Descubra</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {principal.container3ButtomPress2}>
                            <Text style = {principal.containerButtomText}>Quiz</Text>
                        </TouchableOpacity>
                    </View>

{/* ------------ ELETRÔNICO QUARTO CONTAINER ------------  */}

                <View style = {principal.container4} >
                    <View style = {principal.containerTop}>
                        <Text style ={principal.containerTopTitle}>Vidro</Text>
                        <Image style={principal.containerTopImg} source={require('../../src/assets/imgs/Principal/Papel.png')}/>
                    </View>
                    <View style = {principal.containerText}>
                        <Text style={principal.containerTextContents}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor lorem lacus, sed tincidunt velit ornare lobortis. Phasellus laoreet vel lectus at tempus. Praesent sed tortor id null.</Text>
                    </View>
                </View>
                    <View style = {principal.containerButtom}>
                        <TouchableOpacity style = {principal.container4ButtomPress1}>
                            <Text style = {principal.containerButtomText}>Descubra</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {principal.container4ButtomPress2}>
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
    
    // CONTAINER 01
    
      container1:{
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
        backgroundColor: '#FFD8D8',
      },
    
      container1ButtomPress1:{
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
        backgroundColor: '#F22544',
      },
    
      container1ButtomPress2:{
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
        backgroundColor: '#FFD8D8',
        
      },
    
      // CONTAINER 02
    
      container2:{
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
        backgroundColor: '#FFEAA6',
      },
    
      container2ButtomPress1:{
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
        backgroundColor: '#FED140',
      },
    
      container2ButtomPress2:{
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
        backgroundColor: '#FFEAA6',
        
      },
    
      // CONTAINER 03
    
      container3:{
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
        backgroundColor: '#9BD1FD',
      },
    
      container3ButtomPress1:{
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
        backgroundColor: '#2DA1FD',
      },
    
      container3ButtomPress2:{
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
        backgroundColor: '#9BD1FD',
        
      },
    
      // CONTAINER 04
    
      container4:{
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
        backgroundColor: '#B1FF7A',
      },
    
      container4ButtomPress1:{
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
        backgroundColor: '#52B50D',
      },
    
      container4ButtomPress2:{
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
        backgroundColor: '#B1FF7A',
        
      },
        })
    
    