import React from 'react';
import {Image} from 'react-native';
import {BookData} from '../store/BookData.interface';

export const loadImage = (item: BookData, style: {}) => {
  if (item.volumeInfo.imageLinks) {
    return (
      <Image
        source={{uri: item.volumeInfo.imageLinks.thumbnail}}
        style={style}
      />
    );
  }
  return <Image source={require('../../assets/bookIcon.png')} />;
};
