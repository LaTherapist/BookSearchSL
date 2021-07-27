import React from 'react';
import EmptyLikeImage from '../../../../../assets/EmptyLikeImage';
import LikeImage from '../../../../../assets/LikeImage';

interface FavouriteProps {
  isFavourite: Boolean;
}

const Favourite = (props: FavouriteProps) => {
  return props.isFavourite ? <LikeImage /> : <EmptyLikeImage />;
};

export default Favourite;
