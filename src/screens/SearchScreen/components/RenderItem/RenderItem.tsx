import React from 'react';
import { ListRenderItem, View, Text, Image, TouchableOpacity } from 'react-native';
import EmptyLikeImage from '../../../../../assets/EmptyLikeImage';
import { BookData } from '../../../../store/BookData.interface';
import { styles } from './RenderItem.styles';

const RenderItem: ListRenderItem<BookData> = ({item}) => {
  const loadImage = (item: BookData) => {
    if (item.volumeInfo.imageLinks) {
      return (
        <Image 
          source={{uri: item.volumeInfo.imageLinks?.thumbnail}} 
          style={styles.image}
        />
      )
    }
    return (
      <Image
        source={require('../../../../../assets/bookIcon.png')}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        {loadImage(item)}
      </View>
      <View style={styles.textWrapper}>
        <Text>Author: {item.volumeInfo.authors && item.volumeInfo?.authors[0]}</Text>
        <View style={styles.titleWrapper}>
          <Text style={styles.category}>Title:</Text>
          <Text style={styles.title}>{item.volumeInfo.title}</Text>
        </View>
        <Text>Publication date: {item.volumeInfo.publishedDate}</Text>
      </View>
      <TouchableOpacity>
        <EmptyLikeImage />
      </TouchableOpacity>
    </View>
  );
};

export default RenderItem;