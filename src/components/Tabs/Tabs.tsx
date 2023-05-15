import React from 'react';
import { Tabs as MuiTabs, TabsProps as MuiTabsProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TabsProps extends MuiTabsProps {}

const Tabs = (props: TabsProps) => {
  const { children, ...other } = props;
  return <MuiTabs {...other}>{children}</MuiTabs>;
};

export default Tabs;
