import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import EmptyLikeImage from '../../../../../assets/EmptyLikeImage';
import {BookData} from '../../../../store/BookData.interface';
import {styles} from './BookItem.styles';
import { useNavigation } from '@react-navigation/native';
import { DescriptionScreenNavigationProp } from '../../../../../types/NavigationTypes';
import { loadImage } from '../../../../shared/loadimage';

interface ItemProps {
  item: BookData;
};

const BookItem = (props: ItemProps) => {
  const navigation = useNavigation<DescriptionScreenNavigationProp>();

  return (
    <TouchableOpacity style={styles.container}
      activeOpacity={0.5}
      onPress={() => navigation.navigate('Description', {item: props.item})}
    >
      <View style={styles.imageWrapper}>{loadImage(props.item, styles.image)}</View>
      <View style={styles.textWrapper}>
        <Text>
          Author: {props.item.volumeInfo.authors && props.item.volumeInfo?.authors[0]}
        </Text>
        <View style={styles.titleWrapper}>
          <Text style={styles.category}>Title:</Text>
          <Text style={styles.title}>{props.item.volumeInfo.title}</Text>
        </View>
        <Text>Publication date: {props.item.volumeInfo.publishedDate}</Text>
      </View>
      <TouchableOpacity>
        <EmptyLikeImage />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default BookItem;
