import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {selectAll} from '../../../store/bookSlice';
import {FlatList} from 'react-native-gesture-handler';
import renderItem from './RenderItem/renderItem';

const Books = () => {
  const {loading} = useSelector((state: RootState) => state.books);
  const books = useSelector(selectAll);

  if (loading) {
    return <ActivityIndicator
      size="large" color="rgb(15, 200, 15)"
      style={{marginTop: 50}}
    />;
  }

  return (
    <View>
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        refreshing={true}
      />
    </View>
  );
};

export default Books;
