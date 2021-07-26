import React from 'react';
import {ListRenderItem} from 'react-native';
import {BookData} from '../store/BookData.interface';
import BookItem from '../screens/SearchScreen/components/renderItem/BookItem';

const renderItem: ListRenderItem<BookData> = ({item}) => {
  return <BookItem item={item} />;
};

export default renderItem;
