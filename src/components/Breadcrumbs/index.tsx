import React, { memo } from 'react';
import {
  Breadcrumbs as MuiBreadcrumbs,
  BreadcrumbsProps as MuiBreadcrumbsProps,
} from '@mui/material';

export interface BreadcrumbsProps extends MuiBreadcrumbsProps {}

const Breadcrumbs = (props: BreadcrumbsProps) => {
  const { children, ...other } = props;
  return <MuiBreadcrumbs {...other}>{children}</MuiBreadcrumbs>;
};

export default memo(Breadcrumbs);
