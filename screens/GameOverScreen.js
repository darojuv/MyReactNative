import React from 'react';

import {View, StyleSheet, Text, Image, Button, Dimensions, ScrollView } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../contsants/colors';
import MainButton from '../components/MainButton';

const GameOver = props => { 


    return <ScrollView>
        <View style={styles.mainStyle}>
        <TitleText>Game Over!!</TitleText>
     
        <View style={styles.imageContainer} >
            <Image 
                fadeDuration={5000} //milliseconds
                style={styles.image} 
                source={require('../assets/success.png')}
                // source={{uri: 'https://i2.wp.com/www.travelsewhere.net/wp-content/uploads/2019/06/DSC_0708-2.jpg?resize=1170%2C550&ssl=1'}}
                resizeMode="cover"
            />
        </View>
        <View style={styles.resultContainer}>
            <BodyText style={styles.resultText}>
                Your phone needed 
                <Text style={styles.highlight} >{props.roundsNumber}</Text>
                rounds to guess the number 
                <Text style={styles.highlight} >{props.userNumber}</Text> 
            </BodyText>
        </View>
        <MainButton onPress={props.onRestart}>
            NEW GAME
        </MainButton>
        </View>
    </ScrollView>
};

const styles = StyleSheet.create({
    mainStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:'100%',
        height:'100%'
    },
    imageContainer:{
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth:3,
        borderColor:'black',
        // width:300,
        width: Dimensions.get('window').width * 0.7,
        // height:300,
        height: Dimensions.get('window').width * 0.7,
        overflow:'hidden',
        //marginVertical:30
        marginVertical: Dimensions.get('window').height / 30
    },
    highlight:{
        color:Colors.primary,
        fontFamily: 'open-sans-bold'
    },
    resultText:{
        textAlign:'center',
        // fontSize: 20
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20
    },
    resultContainer:{
        marginHorizontal: 30,
        // marginVertical: 15
        marginVertical: Dimensions.get('window').height / 60
    }
});


export default GameOver;