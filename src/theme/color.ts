import { alpha } from '@mui/material';
import { AlphaColor, Color } from '../shared/types/color';
import { merge } from 'lodash';

export const createAlphaColor = <T extends Record<keyof Color, string>>(color: T): T & AlphaColor => {
  const key = [8, 12, 16, 24, 32, 48, 56, 80];

  const alphaColor = key.reduce((prev, current) => {
    const colorKey = `500_${current}`;

    return { ...prev, [colorKey]: alpha(color[500], current / 100) };
  }, {} as AlphaColor);
  return merge(color, alphaColor);
};
