import React from 'react';
import { Skeleton as MuiSkeleton, SkeletonProps as MuiSkeletonProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SkeletonProps extends MuiSkeletonProps {}

const Skeleton = (props: SkeletonProps) => {
  const { children, ...other } = props;
  return <MuiSkeleton {...other}>{children}</MuiSkeleton>;
};

export default Skeleton;
