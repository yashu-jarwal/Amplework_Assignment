import React, { useEffect, useState } from 'react';
import { Button } from 'react-native';
import { View, Image, TouchableOpacity, Text } from 'react-native'
import styles from "./style";

export const ContactCard = (props) => {

    const {
        name,
        contactImage,
        phoneNumber,
        onPress,
        disabled
    } = props


    

    return (
        <View activeOpacity={1} style={styles.renderItemContainer}>
            <View activeOpacity={1} style={styles.innerContainer}>
                <Image resizeMode='contain' style={styles.image} source={contactImage} />
                <View style={{ marginLeft: 10,width:'40%' }}>
                    <Text numberOfLines={1} style={styles.albumText}>{name}</Text>
                    <Text numberOfLines={1} style={styles.createText}>{phoneNumber}</Text>
                </View>
                <View style={{marginLeft: 70,marginRight: 30 }}>
                    <Button title='Add'
                    onPress={onPress}
                    disabled={disabled}
                    />
                </View>
            </View>
        </View>
    )
}
