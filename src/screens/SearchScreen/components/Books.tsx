import React from 'react';
import {
  View,
  ActivityIndicator,
} from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { selectAll  } from '../../../store/bookSlice';
import { FlatList } from 'react-native-gesture-handler';
import RenderItem from './RenderItem/RenderItem';

const Books = () => {
  const { loading } = useSelector((state: RootState) => state.books);
  const books = useSelector(selectAll);

  if (loading) {
    return (
      <ActivityIndicator size="large" style={{marginTop: 50}} />
    )
  }

  return (
    <View>
      <FlatList
        data={books}
        renderItem={RenderItem}
        keyExtractor={item => item.id}
        refreshing={true}
      />
    </View>
  );
};

export default Books;
