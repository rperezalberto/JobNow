import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {dataList} from '../../data/dataList';
import { colores } from '../../theme/colores';
import { useNavigation } from '@react-navigation/native';

export const DiscoverSliderRecommendation = () => {

    const {nagation} = useNavigation();

    const ListRecommen = (item) =>{
        return(

            <View style={{...styles.container, backgroundColor: item.bg}}>
                <View style={styles.containerCard}>
                    <Image source={item.img} />
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.nameCompany}>{item.nameCompany}</Text>
                    <Text style={styles.location}>{item.location}</Text>
                </View>
                <View style={styles.containerImgMargin}>
                        <View style={styles.containerImgSocial}>
                            <Text>{item.date}</Text>
                            <Image source={item.imgSocial} />
                        </View>
                    </View>
            </View>
        );
    }


  return (
    <ScrollView  styles={{backgroundColor: 'red'}}
        horizontal
        showsHorizontalScrollIndicator={false}
        >
        {
            dataList.map((item) => ListRecommen(item))
        }
    </ScrollView>

  )
}

const styles = StyleSheet.create({
    container:{
        width: 200,
        height: 212,
        marginVertical: 5,
        marginHorizontal: 5
    },
    containerCard:{
        flex: 1,
        marginTop: 5,
        marginHorizontal: 10,
    },
    containerImgMargin:{
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical: 5
    },
    title:{
        color: colores.black,
        fontSize: 17,
        fontWeight: '600',
        lineHeight: 17
    },
    nameCompany:{
        color: colores.black,
        fontSize: 15,
        lineHeight: 20
    },
    location:{
        fontSize: 15,
        lineHeight: 20
    },
    containerImgSocial:{
        flexDirection: 'row',
        justifyContent:'space-between'
    }
});