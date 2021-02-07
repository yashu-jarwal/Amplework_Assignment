import React, { useEffect, useState } from 'react';
import { Dimensions, Image, Linking, StatusBar, Alert, ScrollView, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import styles from '../Contact/style'
import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import Contacts, { addContact } from 'react-native-contacts';
import AsyncStorage from '@react-native-community/async-storage';
import { ContactCard } from "../../Component/Contactcard/index";
import Icon from 'react-native-vector-icons/FontAwesome';

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width
const ContactScreen = (props) => {


    const [allContacts, setAllContacts] = useState(null)
    let contactObj = ''
    let phone = null
    let contactsArr = []
    const setarr = []
    

    useEffect(() => {
        if (Platform.OS == 'android') {
            request(PERMISSIONS.ANDROID.READ_CONTACTS).then((result) => {
                if (result != 'granted') {
                    Alert.alert("permison")
                }
                else {

                    Contacts.getAll().then(contacts => {
                        if (contacts != null) {
                            for (let i in contacts) {
                                let phoneNumber = null;
                                if (contacts[i].phoneNumbers.length > 0) {
                                    if (contacts[i].phoneNumbers[0]) {
                                        phone = contacts[i].phoneNumbers[0].number
                                        phoneNumber = phone.replace(/[^0-9]/g, '')

                                        contactObj = {
                                            'name': contacts[i].displayName,
                                            'phone': phone,
                                            'image': contacts[i].thumbnailPath,
                                            'visible': false,
                                            'id': contacts[i].phoneNumbers[0].id
                                        }
                                        contactsArr.push(contactObj)
                                    }
                                }
                            }
                            setAllContacts(contactsArr)
                        }
                    })

                }
            })
        } else {
            request(PERMISSIONS.IOS.CONTACTS).then((result) => {
                console.log('Permitted')
                if (result != 'granted') {
                    Alert.alert("Contacts Permission")
                } else {
                    Contacts.getAll().then(contacts => {
                        if (contacts != null) {
                            for (let i in contacts) {
                                let phoneNumber = null;
                                if (contacts[i].phoneNumbers.length > 0) {
                                    if (contacts[i].phoneNumbers[0]) {
                                        phone = contacts[i].phoneNumbers[0].number
                                        phoneNumber = phone.replace(/[^0-9]/g, '')

                                        contactObj = {
                                            'name': contacts[i].displayName,
                                            'phone': phone,
                                            'image': contacts[i].thumbnailPath
                                        }
                                        contactsArr.push(contactObj)
                                    }
                                }
                            }
                            setAllContacts(contactsArr)
                        }
                    })
                }

            })
        }
    }, []);


    

    const AddContactToAnotherPage = (index) => {
        var data = allContacts[index]
        data.visible = true;
        allContacts[index] = data;
        setAllContacts(allContacts);
        setarr.push(data)
        AsyncStorage.setItem("listdata", JSON.stringify(setarr))
 
    }

   

  

    const renderList = ({ item, index }) => {
        return (
            <ContactCard
                name={item.name}
                contactImage={item.image ? { uri: item.image } : require('../../assets/images/user.jpg')}
                phoneNumber={item.phone}
                onPress={() => { AddContactToAnotherPage(index)}}
                
            />
        )
    }


    return (
        <>
            <StatusBar barStyle={"light-content"} backgroundColor={'#0E365D'} />

            <View style={{ flex: 1 }}>
                <View style={{  marginTop: 20, marginHorizontal: 50, flexDirection: 'row', marginLeft: 20 }}>
                    <Image style={{ width: 40, height: 40, borderRadius: 40, }} source={require('../../assets/images/user.jpg')} />
                    <View style={{ height:45,width:'70%',backgroundColor:'white',flexDirection:'row',padding:2,marginLeft: 40 }}>
                       <Icon name="search" size={28} color="grey"  />
                        <TextInput placeholder="Search an interest" style={{fontsize:24, marginLeft: 10}} />
                    </View>
                    <View style={{marginLeft: 30}}>
                    <Icon name="eye" size={30} color="grey" />
                    </View>
                </View>
                <Text style={{ fontsize: 45, top:10 ,color: '#0E365D' }}>  No interests </Text>
                <View style={[styles.album, { flexDirection: 'row' }]}>
                    <Text style={[styles.albumText, { fontWeight: '400' }]}> {allContacts==null?'0':allContacts.length}  Results </Text>
                </View>
                <View style={[styles.album, { marginTop: 0, flex: 1, marginBottom: 35 }]}>
                    <FlatList
                        style={{ flex: 1 }}
                        data={allContacts != null ? allContacts : []}
                        renderItem={renderList}
                        showsVerticalScrollIndicator={false}
                        bounces={true}
                        keyboardShouldPersistTaps={'handled'}
                        keyExtractor={(item, index) => item.key}
                    />
                </View>
            </View>
        </>
    )
}
export default ContactScreen;