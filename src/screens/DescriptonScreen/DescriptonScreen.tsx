import {useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {DescriptionScreenRouteProp} from '../../../types/NavigationTypes';
import {loadImage} from '../../shared/loadimage';
import {styles} from './DescriptonScreen.styles';

const DescriptonScreen = () => {
  const route = useRoute<DescriptionScreenRouteProp>();

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          {loadImage(route.params.item, styles.image)}
        </View>
        <View style={styles.textRow}>
          <Text style={[styles.text, styles.subtitle]}>Author:</Text>
          <Text style={styles.text}>
            {route.params.item.volumeInfo?.authors[0]}
          </Text>
        </View>
        <View style={styles.textRow}>
          <Text style={[styles.text, styles.subtitle]}>Title:</Text>
          <Text style={styles.text}>{route.params.item.volumeInfo.title}</Text>
        </View>
        <View style={styles.textRow}>
          <Text style={[styles.text, styles.subtitle]}>Publication Date:</Text>
          <Text style={styles.text}>
            {route.params.item.volumeInfo.publishedDate}
          </Text>
        </View>
        <View>
          <Text style={[styles.text, styles.subtitle]}>Description:</Text>
          <Text style={styles.text}>
            {route.params.item.volumeInfo?.description}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default DescriptonScreen;
