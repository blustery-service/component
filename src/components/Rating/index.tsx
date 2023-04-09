import React, { memo } from 'react';
import { Rating as MuiRating, RatingProps as MuiRatingProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RatingProps extends MuiRatingProps {}

const Rating = (props: RatingProps) => {
  return <Rating {...props} />;
};

export default memo(Rating);
