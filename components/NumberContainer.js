import React from 'react';

import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import Colors from '../contsants/colors';

const NumberContaier = props => { 
    return (<View style={styles.conatiner}>
        <Text style={styles.number}>{props.children}</Text>
    </View>);
};

const styles = StyleSheet.create({
    conatiner:{
        borderWidth:2,
        borderColor: Colors.accent,
        padding:10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems:'center',
        justifyContent: 'center',

    },
    number: {
        color: Colors.accent,
        fontSize: 22
    }
});


export default NumberContaier;