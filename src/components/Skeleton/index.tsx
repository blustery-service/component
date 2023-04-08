import React, { memo } from 'react';
import {
  Skeleton as MuiSkeleton,
  SkeletonProps as MuiSkeletonProps,
} from '@mui/material';

export interface SkeletonProps extends MuiSkeletonProps {}

const Skeleton = (props: SkeletonProps) => {
  const { children, ...other } = props;
  return <MuiSkeleton {...other}>{children}</MuiSkeleton>;
};

export default memo(Skeleton);
