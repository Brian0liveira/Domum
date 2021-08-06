import React from 'react';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Text, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons'
import stylesDescubra from '../../../src/styleSheets/StylesDescubra';

export default function DescubraPapel({navigation}){

    return(
        <View style={{backgroundColor: '#fff' ,flex: 1,}}>
            <View style = {stylesDescubra.header}>
                <View style={stylesDescubra.menu}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Icon name='menu' color = 'black' size={50}/>
                    </TouchableOpacity>
                </View>
                <Text style={stylesDescubra.titulo}>PAPEL</Text>
            </View>

            <View style={stylesDescubra.si}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{height: '100%', width: '50%',}}>

                    <View style={stylesDescubra.containerInfo}>
                        <View style={stylesDescubra.containerInfoTitle}>
                            <Text style={{fontSize: 25, fontFamily: 'Roboto', fontWeight: 'bold'}}>Para Começarmos...</Text> 
                        </View>
                        <View style={stylesDescubra.containerInfoText}>
                        <Text style={{fontSize: 20, fontFamily: 'Roboto'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor lorem lacus, sed tincidunt velit ornare lobortis. Phasellus laoreet vel lectus at tempus. Praesent sed tortor id null.</Text> 
                        </View>
                    </View>

                    <View style={stylesDescubra.containerInfo}>
                        <View style={stylesDescubra.containerInfoTitle}>
                            
                        </View>
                        <View style={stylesDescubra.containerInfoText}>

                        </View>
                    </View>

                    <View style={[stylesDescubra.containerInfo, {marginRight: 30}]}>
                        <View style={stylesDescubra.containerInfoTitle}>
                            
                        </View>
                        <View style={stylesDescubra.containerInfoText}>

                        </View>
                    </View>

                </ScrollView>


            </View>

                <View style={stylesDescubra.circles}>
                    <View style={{width: 10, height: 10, backgroundColor: '#000', borderRadius: 10, margin: 5,}}/>
                    <View style={{width: 10, height: 10, backgroundColor: '#000', borderRadius: 10, margin: 5,}}/>
                    <View style={{width: 10, height: 10, backgroundColor: '#000', borderRadius: 10, margin: 5,}}/>
                </View> 
                
                <View style={stylesDescubra.button}>
                    <TouchableOpacity style={stylesDescubra.buttonDesign}>
                        <Text style={{fontSize: 20, fontFamily: 'Roboto',}}> QUIZ </Text>
                    </TouchableOpacity>
                </View>

        </View>

    );
}