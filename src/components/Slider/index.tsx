import React, { ReactNode, memo } from 'react';

import { Slider as MuiSlider, SliderProps as MuiSliderProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SliderProps extends MuiSliderProps {}

const Slider = (props: SliderProps) => {
  return <MuiSlider {...props} />;
};

export default memo(Slider);
