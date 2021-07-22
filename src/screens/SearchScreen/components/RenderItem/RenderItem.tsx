import React from 'react';
import {ListRenderItem} from 'react-native';
import {BookData} from '../../../../store/BookData.interface';
import BookItem from './BookItem';

const renderItem: ListRenderItem<BookData> = ({item}) => {
  return (
    <BookItem item={item} />
  );
};

export default renderItem;
