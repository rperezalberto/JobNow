//import liraries
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colores } from '../theme/colores';
import {imgLocation} from '../theme/imgLocation';

// create a component
export const DetailsScreen = (props) => {
    const navigation = useNavigation();
    const {imgBg, bg, date, img, imgSocial, location, nameCompany, title} = props.route.params;
    return (
        <ScrollView style={styles.container}>

        <View >
            <Image source={imgBg} style={styles.bgImg} />
            <TouchableOpacity style={styles.bgIcon} onPress={() => navigation.goBack()}>
                <Icon name='arrow-left'  color={colores.black} size={25}/>
            </TouchableOpacity>

            <View style={styles.bodyContainer}>
                <View style={styles.containerRow}>
                    <Image source={img} style={styles.imgLogo} />
                    <View style={styles.boxContianer}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.nameCompany}>{nameCompany}</Text>
                    </View>
                </View>

                <View style={styles.containerLocation}>
                    <Text style={styles.txtLocaction}>{location}</Text>  
                    <View style={styles.iconBook}>
                        <Icon name='bookmark' color={colores.black} size={26} />
                    </View>
                </View>

                <View style={styles.containerSocial}>
                    <Text style={styles.txtDate}>Published {date}</Text>
                    <Image source={imgSocial} />
                </View>

                <View style={styles.boxAbout}>
                    <Text style={styles.aboutTitle}>About us</Text>
                    <Text style={styles.txtAbout}>What unites all Amazonians across teams and regions is that we are all striving to delight customers and make their lives easier. Our mission drives us to seek diverse perspectives.</Text>
                </View>
 
                <View>
                    <Image source={imgLocation.photoGallery} />
                    <Text style={styles.txtAbout}>What unites all Amazonians across teams and regions is that we are all striving to delight customers and make their lives easier. Our mission drives us to seek diverse perspectives.</Text>
                </View>


            </View>
        </View>
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container:{
        flex: 1,
        // backgroundColor: 'red'
    },
    bgImg:{
        width: '100%',
        backgroundColor: 'black'
    },
    bgIcon:{
        position: 'absolute',
        margin: 10
    },
    bodyContainer:{
        marginHorizontal: 15,
        marginTop: -80
    },
    boxContianer:{
        marginHorizontal: 15
    },  
    containerRow:{
        flexDirection : 'row',
        alignItems: 'center'
    },
    imgLogo:{
        width: 66,
        height: 66
    },
    title:{
        color: colores.white,
        fontSize: 28,
        fontWeight: '700',
        lineHeight: 34
    },
    nameCompany:{
        color: colores.white,
        fontSize: 22,
        fontWeight: '700',
        lineHeight: 28
    },
    containerLocation:{
        marginTop: 40,
        flexDirection: 'row'
    },
    txtLocaction:{
        color: colores.black,
        fontSize: 22,
        fontWeight: '700',
        lineHeight: 28
    },
    iconBook:{
        flex: 1,
        alignItems: 'flex-end'
    },
    containerSocial:{
        marginTop: 15
    },
    txtDate:{
        fontSize: 17,
        fontWeight: '600',
        lineHeight: 22,
        marginBottom:10
    },
    boxAbout:{
        marginVertical: 20
    },
    aboutTitle:{
        color: colores.black,
        fontSize: 22,
        fontWeight: '700',
        lineHeight: 28,
        marginVertical: 15
    },
    txtAbout:{
        color: colores.black,
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 20
    }
});

