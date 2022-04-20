//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {dataList} from '../../data/dataList';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colores} from '../../theme/colores';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


export const DiscoverNewSlider = () => {
    const navigation = useNavigation();
    return (
        < >
            {
                dataList.map((item) => (
                    <View style={styles.container}>
                        <Image source={item.img} />
                        
                        <View style={styles.boxContainerSlider}>

                            <View style={styles.boxItem}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Icon name='bookmark'  color={colores.black} size={17}/>
                            </View>
                                <Text style={styles.nameCompany}>{item.nameCompany}</Text>


                            <View style={styles.boxItem}>
                                <Text>{item.location}</Text>
                                <TouchableOpacity onPress={()=> navigation.navigate('DetailsScreen', item)}>
                                     <Icon name='arrow-right' color={colores.grey} size={17}/>
                                </TouchableOpacity>
                            </View>

                            
                            <View style={styles.boxDateImg}>
                                <Text>{item.date} </Text>
                                <Image source={item.imgSocial} />
                            </View>
                            
                        </View>
                    </View>
                ))
            }
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        borderTopWidth: 2,
        borderColor: colores.greyClaro,
        marginTop: 5,
        paddingVertical: 10
    },
    boxContainerSlider:{
        flex:1,
        backgroundColor: 'white'
    },
    boxItem:{
        flex: 1,
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title:{
        color: colores.black,
        fontSize: 17,
        fontWeight: '600'
    },
    nameCompany:{
        color: colores.black,
        marginHorizontal: 10
    },
    boxDateImg:{
        flexDirection: 'row',
        marginHorizontal: 10,
        marginTop:15,
        alignItems: 'center'
    }


});
