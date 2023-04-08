import React, { memo } from 'react';
import { Tab as MuiTab, TabProps as MuiTabProps } from '@mui/material';

export interface TabProps extends MuiTabProps {}

const Tab = (props: TabProps) => {
  const { children, ...other } = props;
  return <MuiTab {...other}>{children}</MuiTab>;
};

export default memo(Tab);
