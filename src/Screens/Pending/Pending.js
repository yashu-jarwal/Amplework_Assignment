import React, { useEffect, useState } from 'react';
import { Dimensions, Image, Linking, StatusBar, Alert, ScrollView, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { ContactCard } from "../../Component/Contactcard/index";
import styles from '../Pending/styles'
import { Component } from 'react';

class PendingScreen extends Component {
 
state={
    addContact:'null'
}

componentDidMount(){
    const {navigation} = this.props;
    this._unsubscribe = navigation.addListener("focus", () => {
     this.GetData()
    })
  }
  componentWillUnmount(){
    this._unsubscribe();
  }
GetData = async () => {
       
    const getarr = await AsyncStorage.getItem("listdata")
    const data = JSON.parse(getarr)
    this.setState({addContact:data})
 }
 
   
     renderListTwo = ({ item, index }) => {
       
        return (
            <ContactCard
                name={item.name}
                contactImage={item.image ? { uri: item.image } : require('../../assets/images/user.jpg')}
                phoneNumber={item.phone}
                disabled={true}
            />
        )
    }

render(){
    
       return (
        <>
            <StatusBar barStyle={"light-content"} backgroundColor={'#0E365D'} />
            <View style={{ flex: 1 }}>
                <Text style={{marginTop: 35, marginLeft: 20}}>{this.state.addContact==null?'0':this.state.addContact.length} Pending Results </Text>
                <View style={[styles.album, { marginTop: 35, flex: 1, marginBottom: 35 }]}>
                <FlatList
                        style={{ flex: 1 }}
                        data={this.state.addContact}
                        renderItem={this.renderListTwo}
                        bounces={true}
                        keyboardShouldPersistTaps={'handled'}
                        keyExtractor={(item, index) => item.key}
                    />
                  
                </View>
            </View>
        </>
    )
}
}
export default PendingScreen;
