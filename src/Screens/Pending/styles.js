import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('screen');

const styles = StyleSheet.create({
    album: {
        margin: 20,
        shadowColor: 'gray',
        shadowOffset: {
            width: 0,
            height: 0.5
        },
        shadowRadius: 2,
        shadowOpacity: 0.5,
        elevation: 1
    }
});

export default styles;
