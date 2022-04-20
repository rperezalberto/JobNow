import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { colores } from '../theme/colores';
import { SafeAreaView } from 'react-native-safe-area-context';

import { DiscoverMenuSlider } from '../components/discover/DiscoverMenuSlider';
import { DiscoverNewSlider } from '../components/discover/DiscoverNewSlider';
import { DiscoverSliderRecommendation } from '../components/discover/DiscoverSliderRecommendation';
import { useNavigation } from '@react-navigation/native';

export const DiscoverScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView  style={styles.container}>
      <ScrollView style={{marginHorizontal: 15}} 
        showsVerticalScrollIndicator={false}
      >
          <DiscoverMenuSlider/>

        <View style={styles.containerSeeAll}>
            <Text style={styles.txtSeall}>Recommended for you</Text>
            <TouchableOpacity  onPress={() => navigation.navigate('SavedOffertsScrren')}>
              <Text style={styles.txtSeallLink}>See all</Text>
            </TouchableOpacity>
        </View>

        <DiscoverSliderRecommendation />

        <View style={styles.containerSeeAll}>
            <Text style={styles.txtSeall}>What’s new</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SavedOffertsScrren')}>
              <Text style={styles.txtSeallLink}>See all</Text>
            </TouchableOpacity>
        </View>

        <DiscoverNewSlider />

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colores.white,
  },
  containerBody:{
    top: 10,
    marginVertical: 20,
  },  
  containerSeeAll:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15
  },
  txtSeall:{
    color: colores.black,
    fontSize: 17,
    fontWeight:'600',
    lineHeight: 22,
  },
  txtSeallLink:{
    color: colores.blue,
    fontSize: 17,
    fontWeight:'600',
    lineHeight: 22,
  }
  
});

