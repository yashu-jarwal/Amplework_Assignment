import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('screen');



const styles = StyleSheet.create({
    renderItemContainer: {
        width: width * 0.88,
        height: height * 0.10,
        flexDirection: 'row',
        alignSelf: 'center',    
        marginTop: 10,
    },
    innerContainer: {
        width: 350,
        height: height * 0.10,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.8,
        justifyContent:'space-between',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 40,
    },
    albumText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 12,
    },
    createText: {
        fontSize: 12,
        color: 'black',
    }
});

export default styles;
