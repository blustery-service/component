import React, { memo } from 'react';
import { Collapse as MuiCollapse, CollapseProps as MuiCollapseProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CollapseProps extends MuiCollapseProps {}

const Collapse = (props: CollapseProps) => {
  const { children, ...other } = props;
  return <MuiCollapse {...other}>{children}</MuiCollapse>;
};

export default memo(Collapse);
