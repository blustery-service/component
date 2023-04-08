import React, { memo } from 'react';
import { Tabs as MuiTabs, TabsProps as MuiTabsProps } from '@mui/material';

export interface TabsProps extends MuiTabsProps {}

const Tabs = (props: TabsProps) => {
  const { children, ...other } = props;
  return <MuiTabs {...other}>{children}</MuiTabs>;
};

export default memo(Tabs);
