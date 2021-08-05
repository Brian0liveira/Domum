import React from 'react';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Text, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons'
import styles from '../../../src/styleSheets/Style';

export default function Destaques({navigation}){

    return(
        <View>
            <View style={styles.menu}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Icon name='menu' color = '#45B19D' size={50}/>
                </TouchableOpacity>
            </View>
            <Text>
                Destaque
            </Text>
        </View>

    );
}